import { executorOf } from '@idan-loo/middleware'
import { checkPath } from './path'
import { acquireType } from './type'
import { acquireSubject } from './subject'
import { acquireBody } from './body'
import { acquireCardId } from './card'
import { doCommit } from './commit'

export const exec = executorOf(
  checkPath,
  acquireType,
  acquireSubject,
  acquireBody,
  acquireCardId,
  doCommit
)
