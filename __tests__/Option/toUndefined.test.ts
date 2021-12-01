import { pipe, O, A } from '../..'

describe('toUndefined', () => {
  it('returns undefined', () => {
    expect(pipe(O.None, O.toUndefined)).toEqual(undefined)
    expect(
      pipe(
        O.fromNullable({ prop: null }),
        O.mapNullable(obj => obj.prop),
        O.toUndefined,
      ),
    ).toEqual(undefined)
  })

  it('returns a value', () => {
    expect(pipe(O.Some('value'), O.toUndefined)).toEqual('value')
    expect(
      pipe(
        O.fromNullable({ prop: 'value' }),
        O.mapNullable(obj => obj.prop),
        O.toUndefined,
      ),
    ).toEqual('value')
  })

  it('*', () => {
    expect(
      pipe(
        O.fromNullable(['hello', 'world']),
        O.flatMap(A.takeExactly(2)),
        O.toUndefined,
      ),
    ).toEqual(['hello', 'world'])
    expect(
      pipe(O.fromNullable([]), O.flatMap(A.takeExactly(2)), O.toUndefined),
    ).toEqual(undefined)
  })
})
