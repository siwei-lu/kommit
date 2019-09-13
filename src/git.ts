import { pathExists } from 'fs-extra'
import { resolve } from 'path'
import { Context } from './types'
import { spawnSync } from 'child_process'

export async function isRepository(path: string) {
  const subdir = resolve(path, '.git')
  return pathExists(subdir)
}

export async function commit(ctx: Context) {
  const message = messageOf(ctx)

  const { error } = spawnSync('git', ['commit', '-m', message], {
    encoding: 'utf8',
  })

  if (error) {
    throw error
  }
}

export function messageOf({ type, scope, subject, body, footer }: Context) {
  let message = `${type}${scope ? `(${scope})` : ''}: ${subject}`
  ;[body, footer].forEach(m => {
    if (m) {
      message += `\n\n${m}`
    }
  })

  return message
}
