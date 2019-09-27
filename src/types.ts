export type CommitType =
  | 'feat'
  | 'fix'
  | 'test'
  | 'chore'
  | 'docs'
  | 'refactor'
  | 'style'
  | 'ci'
  | 'pref'

export type Context = {
  path: string
  user: User
  type: CommitType
  subject: string
  scope?: string
  body?: string
  footer: string[]
  error?: Error
}

export type User = {
  name: string
  email: string
}
