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
  scope: string
  subject: string
  body?: string
  footer?: string
}
