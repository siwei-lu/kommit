import { Context } from './types'
import { exec } from './middlewares'

export { concatWithNewLines } from '~/helper'

export async function main() {
  const ctx: Context = {
    path: process.cwd(),
    type: 'feat',
    subject: '',
    scope: '#',
  }

  await exec(ctx)
}
