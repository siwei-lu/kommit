import { pathExists } from 'fs-extra'
import { resolve } from 'path'
import { Context } from './types'
import { spawn, execSync } from 'child_process'

export async function isRepository(path: string) {
  const subdir = resolve(path, '.git')
  return pathExists(subdir)
}

export async function commit(ctx: Context) {
  const message = messageOf(ctx)

  const cp = spawn('git', ['commit', '-m', message], {
    cwd: ctx.path,
  })

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

  if (body) {
    message += '\n\n' + body
  }

  if (footer.length) {
    message += '\n\n' + footer.join('\n\n')
  }

  return message
}

export function getUser(path: string) {
  const name = execSync('git config user.name', { encoding: 'utf8', cwd: path })
  const email = execSync('git config user.email', {
    encoding: 'utf8',
    cwd: path,
  })

  return {
    name: name.replace(/\s+$/, ''),
    email: email.replace(/\s+$/, ''),
  }
}
