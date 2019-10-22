import { ListQuestion, prompt } from 'inquirer'
import { Next } from '@idan-loo/middleware'
import { Context } from '../types'
import { getConfigIn } from '../config'
import { getUser } from 'git'

const None = 'None'

const coAuthorQuestion: ListQuestion = {
  type: 'list',
  name: 'coAuthor',
  message: 'Select who works together with you:',
}

export async function acquireCoAuthor(ctx: Context, next: Next) {
  const { members } = await getConfigIn(ctx.path)

  if (!members) {
    return next()
  }

  coAuthorQuestion.choices = [None, ...members.map(e => ({ value: e }))]
  const { coAuthor } = await prompt([coAuthorQuestion])
  const { name, email } = getUser(ctx.path)
  const me = [name, email].join(' ')

  if (coAuthor !== None && coAuthor !== me) {
    ctx.footer.push(`Co-authored-by: ${coAuthor}`)
  }

  return next()
}
