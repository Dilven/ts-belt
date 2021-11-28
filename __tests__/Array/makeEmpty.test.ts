import { expectType } from 'ts-expect'

import { A } from '../..'

describe('makeEmpty', () => {
  it('provides correct types', () => {
    expectType<ReadonlyArray<number>>(A.makeEmpty<number>())
  })

  it('creates an empty array', () => {
    const result = A.makeEmpty<string>()
    expect(result).toEqual([])
  })

  it('*', () => {
    expect(A.makeEmpty<number>()).toEqual([])
  })
})
