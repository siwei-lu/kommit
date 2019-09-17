import { ListQuestion, prompt } from 'inquirer'
import { Next } from '@idan-loo/middleware'
import { Context } from '~/types'
import { getConfigIn } from '~/config'
import { concatWithNewLines } from '~/helper'

const None = 'None'

const coAuthorQuestion: ListQuestion = {
  type: 'list',
  name: 'coAuthor',
  message: 'Select who works together with you:',
}

export async function acquireCoAuthor(ctx: Context, next: Next) {
  const { members } = await getConfigIn(ctx.path)

  if (members) {
    coAuthorQuestion.choices = [None, ...members.map(e => ({ value: e }))]
    const { coAuthor } = await prompt([coAuthorQuestion])

    if (coAuthor !== None) {
      ctx.footer = concatWithNewLines(ctx.footer, `Co-authored-by: ${coAuthor}`)
    }
  }

  return next()
}
