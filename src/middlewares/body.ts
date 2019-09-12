import { Question, prompt } from 'inquirer'
import { Context } from '~/types'
import { Next } from '@idan-loo/middleware'

const bodyQuestion: Question = {
  type: 'input',
  name: 'body',
  message: 'Provide a longer description of the change:\n',
}

export async function acquireBody(ctx: Context, next: Next) {
  const { body } = await prompt([bodyQuestion])
  ctx.body = body
  return next()
}
