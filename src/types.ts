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
  type: CommitType
  subject: string
  scope?: string
  body?: string
  footer?: string
  error?: Error
}
