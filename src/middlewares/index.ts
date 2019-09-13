import { compose } from '@idan-loo/middleware'
import { checkPath } from './path'
import { acquireType } from './type'
import { acquireSubject } from './subject'
import { acquireBody } from './body'
import { acquireCardId } from './card'
import { acquireBreakingChange } from './breakingChange'
import { doCommit } from './commit'
import { getPlugin } from '~/config'
import { Context } from '~/types'

export async function exec(ctx: Context) {
  const plugin = await getPlugin()
  const execute = compose(
    checkPath,
    acquireType,
    acquireSubject,
    acquireBody,
    acquireCardId,
    acquireBreakingChange,
    plugin,
    doCommit
  )

  await execute(ctx)
}
