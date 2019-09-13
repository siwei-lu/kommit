import { compose, Next } from '@idan-loo/middleware'
import getValue from 'get-value'
import { checkPath } from './path'
import { acquireType } from './type'
import { acquireSubject } from './subject'
import { acquireBody } from './body'
import { acquireCardId } from './card'
import { acquireBreakingChange } from './breakingChange'
import { doCommit } from './commit'
import { Context } from '~/types'
import { getConfig } from '~/config'

export async function emptyWare(_: Context, next: Next) {
  return next()
}

export async function exec(ctx: Context) {
  const config = await getConfig()

  const execute = compose(
    checkPath,
    acquireType,
    acquireSubject,
    acquireBody,
    acquireCardId,
    acquireBreakingChange,
    getValue(config, ['hooks', 'before'], { default: emptyWare }),
    doCommit,
    getValue(config, ['hooks', 'after'], { default: emptyWare })
  )

  await execute(ctx)
}
