import { pathExists } from 'fs-extra'
import { resolve } from 'path'
import { Context } from './types'
import { spawn } from 'child_process'

export async function isRepository(path: string) {
  const subdir = resolve(path, '.git')
  return pathExists(subdir)
}

export async function commit(ctx: Context) {
  const message = messageOf(ctx)

  const cp = spawn('git', ['commit', '-m', message])

  let stdout = ''
  cp.stdout.on('data', chunk => (stdout += chunk))

  return new Promise((resolve, reject) => {
    cp.addListener('exit', code => {
      if (code === 0) {
        return resolve()
      }

      reject(new Error(stdout))
    })
  })
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
