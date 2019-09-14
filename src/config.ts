import { resolve } from 'path'
import { pathExists } from 'fs-extra'
import { Middleware } from '@idan-loo/middleware'

export type Config = {
  scopes?: string[]
  members?: string[]
  hooks?: { before: Middleware; after: Middleware }
}

const configFileOf = (path: string) => resolve(path, '.kommit', 'config.js')

export async function getConfigIn(path: string): Promise<Config> {
  const file = configFileOf(path)

  if (!(await pathExists(file))) {
    return {}
  }

  return require(file)
}
