import { NumberQuestion, prompt } from 'inquirer'
import { Next } from '@idan-loo/middleware/types'
import { Context } from '~/types'

const cardQuestion: NumberQuestion = {
  type: 'number',
  name: 'card',
  message: `Give the card id of Jira you are doing for:\n`,
  suffix: '#',
}

export async function acquireCardId(ctx: Context, next: Next) {
  const { card } = await prompt([cardQuestion])
  ctx.scope = `#${card}`
  return next()
}
