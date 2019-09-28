import { resolve } from 'path'
import { isRepository, messageOf } from '../src/git'
import { Context } from '../src/types'

describe('isRepository()', () => {
  test('should return true if a repository path given', async () => {
    const rootdir = resolve(__dirname, '..')
    expect(await isRepository(rootdir)).toBe(true)
  })

  test('should return false if a non-repository path given', async () => {
    expect(await isRepository(__dirname)).toBe(false)
  })
})

describe('messageOf()', () => {
  test('integrates the context without a body and a footer', () => {
    const ctx: Context = {
      user: { name: 'test', email: 'test' },
      path: process.cwd(),
      type: 'feat',
      scope: null,
      subject: 'this is the subject',
      body: null,
      footer: [],
    }

    const message = messageOf(ctx)
    expect(message).toEqual(`feat: this is the subject`)
  })

  test('integrates the context including a body', () => {
    const ctx: Context = {
      user: { name: 'test', email: 'test' },
      path: process.cwd(),
      type: 'feat',
      scope: null,
      subject: 'this is the subject',
      body: 'this is the body',
      footer: [],
    }

    const message = messageOf(ctx)
    expect(message).toEqual(`feat: this is the subject\n\nthis is the body`)
  })

  test('integrates the context including a footer', () => {
    const ctx: Context = {
      user: { name: 'test', email: 'test' },
      path: process.cwd(),
      type: 'feat',
      scope: null,
      subject: 'this is the subject',
      body: null,
      footer: ['the first footer', 'the last footer'],
    }

    const message = messageOf(ctx)
    expect(message).toEqual(
      `feat: this is the subject\n\nthe first footer\n\nthe last footer`
    )
  })

  test('integrates the context including both a footer and a body', () => {
    const ctx: Context = {
      user: { name: 'test', email: 'test' },
      path: process.cwd(),
      type: 'feat',
      scope: null,
      subject: 'this is the subject',
      body: 'the body',
      footer: ['the first footer', 'the last footer'],
    }

    const message = messageOf(ctx)
    expect(message).toEqual(
      'feat: this is the subject\n\nthe body\n\nthe first footer\n\nthe last footer'
    )
  })
})
