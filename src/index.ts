import { Context } from './types'
import { exec } from './middlewares'
import { getUser } from './git'

export { concatWithNewLines } from '~/helper'
export { Context, CommitType } from '~/types'

export async function main() {
  const path = process.cwd()
  const user = getUser(path)

  const ctx: Context = {
    user,
    path,
    type: 'feat',
    subject: '',
    scope: '',
    footer: [],
  }

  await exec(ctx)
}
