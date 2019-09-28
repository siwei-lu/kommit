import { checkPath } from '../../src/middlewares/path'

test('should not go next when a non-repository path given', async () => {
  const ctx: any = { path: __dirname }
  const next = jest.fn()

  const error = console.error
  console.error = jest.fn()

  await checkPath(ctx, next)
  expect(next).not.toBeCalled()
  expect(console.error).toBeCalled()

  console.error = error
})

test('should go next when a git repository path given', async () => {
  const ctx: any = { path: process.cwd() }
  const next = jest.fn()

  await checkPath(ctx, next)
  expect(next).toBeCalled()
})
