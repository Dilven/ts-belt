import { expectType } from 'ts-expect'

import { S } from '../../dist/cjs'

describe('trim', () => {
  it('provides correct types', () => {
    expectType<string>(S.trim('text'))
  })

  it('returns a new string with leading whitespace removed from string', () => {
    expect(S.trimStart('  text   ')).toEqual('text   ')
  })
})
