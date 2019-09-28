import { Question, prompt } from 'inquirer'
import { Context } from '../types'
import { Next } from '@idan-loo/middleware'

const subjectQuestion: Question = {
  type: 'input',
  name: 'subject',
  message: 'Write a short, imperative mood description of the change:',

  validate(input: string) {
    if (input.length > 65) {
      return `should be fewer than: ${input.substr(0, 65)}`
    }
    return true
  },
}

export async function acquireSubject(ctx: Context, next: Next) {
  subjectQuestion.suffix = ` (no more than 65 characters)\n ${ctx.type}${
    ctx.scope ? `(${ctx.scope})` : ''
  }:`

  const { subject } = await prompt([subjectQuestion])
  ctx.subject = subject
  return next()
}
