import { InputQuestion, prompt } from 'inquirer'
import { Context } from '~/types'
import { Next } from '@idan-loo/middleware'

const breakChangeQuestion: InputQuestion = {
  type: 'input',
  name: 'breakingChange',
  message: 'List any breaking changes\nBREAKING CHANGE:',
}

export async function acquireBreakingChange(ctx: Context, next: Next) {
  const { breakingChange } = await prompt([breakChangeQuestion])

  if (ctx.footer) {
    ctx.footer += '\n\n'
  } else {
    ctx.footer = ''
  }

  ctx.footer += `BREAK CHANGE: ${breakingChange}`
  return next()
}
