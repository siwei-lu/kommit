import { prompt, ListQuestion } from 'inquirer'
import { Context } from '~/types'
import { Next } from '@idan-loo/middleware/types'

const typeQuestion: ListQuestion = {
  type: 'list',
  name: 'type',
  message: `Select the type of change that you're committing:`,
  choices: [
    {
      name: 'feat:\t\tA new feature',
      value: 'feat',
    },
    {
      name: 'fix:\t\tA bug fix',
      value: 'fix',
    },
    {
      name: 'test:\t\tAdding missing tests',
      value: 'test',
    },
    {
      name: 'chore:\tBuild process or auxiliary tool changes',
      value: 'chore',
    },
    {
      name: 'docs:\t\tDocumentation only changes',
      value: 'docs',
    },
    {
      name:
        'refactor:\tA code change that neither fixes a bug or adds a feature',
      value: 'refactor',
    },
    {
      name: 'style:\tMarkup, white-space, formatting, missing semi-colons...',
      value: 'style',
    },
    {
      name: 'ci:\t\tCI related changes',
      value: 'ci',
    },
    {
      name: 'perf:\t\tA code change that improves performance',
      value: 'pref',
    },
  ],
}

export async function acquireType(ctx: Context, next: Next) {
  const answer = await prompt([typeQuestion])
  ctx.type = answer.type
  return next()
}
