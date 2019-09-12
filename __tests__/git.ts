import { resolve } from 'path'
import { isRepository } from '~/git'

describe('isRepository()', () => {
  test('should return true if a repository path given', async () => {
    const rootdir = resolve(__dirname, '..')
    expect(await isRepository(rootdir)).toBe(true)
  })

  test('should return false if a non-repository path given', async () => {
    expect(await isRepository(__dirname)).toBe(false)
  })
})
