import { Next } from '@idan-loo/middleware'
import { Context } from '~/types'
import { ListQuestion, prompt } from 'inquirer'
import { getConfig } from '~/config'

const scopeQuestion: ListQuestion = {
  type: 'list',
  name: 'scope',
  message: `Select the scope of change that you're commiting:`,
}

export async function acquireScope(ctx: Context, next: Next) {
  const { scopes } = await getConfig()

  if (scopes) {
    scopeQuestion.choices = scopes.map(e => ({ value: e }))
    const { scope } = await prompt([scopeQuestion])
    ctx.scope = scope
  }

  return next()
}
