import { Question, prompt } from 'inquirer'
import { Context } from '~/types'
import { Next } from '@idan-loo/middleware'

export async function acquireSubject(ctx: Context, next: Next) {
  const subjectQuestion: Question = {
    type: 'input',
    name: 'subject',
    message: 'Write a short, imperative mood description of the change:',
    suffix: ` (no more than 65 characters)\n ${ctx.type}:`,

    filter(input: string) {
      if (input.length > 65) {
        return input.substr(0, 65)
      }
      return input
    },
  }

  const { subject } = await prompt([subjectQuestion])
  ctx.subject = subject
  return next()
}
