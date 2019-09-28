import ora from 'ora'
import { Context } from '../types'
import { Next } from '@idan-loo/middleware'
import { commit } from '../git'

export async function doCommit(ctx: Context, next: Next) {
  const spinner = ora('Running').start()

  try {
    await commit(ctx)
    spinner.succeed('Done!')
  } catch (err) {
    ctx.error = err
    spinner.fail(err.message)
  }

  return next()
}
