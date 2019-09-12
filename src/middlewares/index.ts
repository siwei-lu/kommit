import { executorOf } from '@idan-loo/middleware'
import { checkPath } from './path'
import { acquireType } from './type'
import { acquireSubject } from './subject'
import { acquireBody } from './body'
import { acquireCardId } from './card'
import { doCommit } from './commit'
import { getPlugin } from '~/config'
import { Context } from '~/types'

export async function exec(ctx: Context) {
  const plugin = await getPlugin()
  const execute = executorOf(
    checkPath,
    acquireType,
    acquireSubject,
    acquireBody,
    acquireCardId,
    plugin,
    doCommit
  )

  await execute(ctx)
}
