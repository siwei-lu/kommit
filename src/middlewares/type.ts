import { prompt, ListQuestion } from 'inquirer'
import { Context } from '~/types'
import { Next } from '@idan-loo/middleware'

const typeQuestion: ListQuestion = {
  type: 'list',
  name: 'type',
  message: `Select the type of change that you're committing:`,
  choices: [
    {
      name: 'feat:\t\tA new feature',
      value: 'feat',
      short: 'feat',
    },
    {
      name: 'fix:\t\tA bug fix',
      value: 'fix',
      short: 'fix',
    },
    {
      name: 'test:\t\tAdding missing tests',
      value: 'test',
      short: 'test',
    },
    {
      name: 'chore:\tBuild process or auxiliary tool changes',
      value: 'chore',
      short: 'chore',
    },
    {
      name: 'docs:\t\tDocumentation only changes',
      value: 'docs',
      short: 'docs',
    },
    {
      name:
        'refactor:\tA code change that neither fixes a bug or adds a feature',
      value: 'refactor',
      short: 'refactor',
    },
    {
      name: 'style:\tMarkup, white-space, formatting, missing semi-colons...',
      value: 'style',
      short: 'style',
    },
    {
      name: 'ci:\t\tCI related changes',
      value: 'ci',
      short: 'ci',
    },
    {
      name: 'perf:\t\tA code change that improves performance',
      value: 'pref',
      short: 'pref',
    },
  ],
}

export async function acquireType(ctx: Context, next: Next) {
  const answer = await prompt([typeQuestion])
  ctx.type = answer.type
  return next()
}
