export function concatWithNewLines(prev: string, current: string) {
  if (prev) {
    prev += '\n\n'
  } else {
    prev = ''
  }

  return prev + current
}
