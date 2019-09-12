import { Next } from '@idan-loo/middleware'
import { Context } from '~/types'
import { isRepository } from '~/git'

export async function checkPath({ path }: Context, next: Next) {
  if (await isRepository(path)) {
    return next()
  }

  console.error('The folder you are commiting in is not a git repository.')
  console.error('Try run `git init` at first.')
}
