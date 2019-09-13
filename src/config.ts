import { join } from 'path'
import { readFile, pathExists } from 'fs-extra'
import { Middleware } from '@idan-loo/middleware'

export type Config = {
  members?: string[]
}

const configDir = join(process.cwd(), '.kommit')
const configFile = join(configDir, 'config.json')
const pluginFile = join(configDir, 'plugin.js')
const emptyPlugin = async () => {}

export async function getConfig(path = configFile) {
  if (!(await pathExists(path))) {
    return {}
  }

  const config: Config = await readFile(path, 'utf8').then(JSON.parse)
  return config
}

export async function getPlugin(path = pluginFile) {
  if (!(await pathExists(path))) {
    return emptyPlugin
  }

  const plugin: Middleware = await import(path)
  return plugin
}
