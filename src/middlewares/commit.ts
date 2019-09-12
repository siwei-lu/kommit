import { Context } from '~/types'
import { Next } from '@idan-loo/middleware'
import { commit } from '~/git'

export async function doCommit(ctx: Context, next: Next) {
  try {
    await commit(ctx)
    return next()
  } catch (_) {
    console.log('There are some problems occuring.')
  }
}
