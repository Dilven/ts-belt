import { expectType } from 'ts-expect'

import { S } from '../../dist/cjs'

describe('trim', () => {
  it('provides correct types', () => {
    expectType<string>(S.trimEnd('text'))
  })

  it('returns a new string with trailing whitespace removed from string', () => {
    expect(S.trimEnd('  text   ')).toEqual('  text')
  })
})
