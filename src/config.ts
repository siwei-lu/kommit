import { join } from 'path'
import { pathExists } from 'fs-extra'
import { Middleware } from '@idan-loo/middleware'

export type Config = {
  scopes?: string[]
  members?: string[]
  hooks?: { before: Middleware; after: Middleware }
}

const configDir = join(process.cwd(), '.kommit')
const configFile = join(configDir, 'config.js')

export async function getConfig(path = configFile): Promise<Config> {
  if (!(await pathExists(path))) {
    return {}
  }

  return require(path)
}
