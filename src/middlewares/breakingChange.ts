import { InputQuestion, prompt } from 'inquirer'
import { Next } from '@idan-loo/middleware'
import { Context } from '~/types'
import { concatWithNewLines } from '~/helper'

const breakChangeQuestion: InputQuestion = {
  type: 'input',
  name: 'breakingChange',
  message: 'List any breaking changes\nBREAKING CHANGE:',
}

export async function acquireBreakingChange(ctx: Context, next: Next) {
  const { breakingChange } = await prompt([breakChangeQuestion])

  if (breakingChange) {
    ctx.footer = concatWithNewLines(
      ctx.footer,
      `BREAKING CHANGE: ${breakingChange}`
    )
  }

  return next()
}
