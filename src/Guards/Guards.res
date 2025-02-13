let is = (value, type_) => Js.typeof(value) === type_

export isString = value => is(value, "string")
export isNumber = value => is(value, "number") && !Js.Float.isNaN(value)
export isBoolean = value => is(value, "boolean")
export isPromise = %raw("value => value instanceof Promise")
export isArray = value => Js.Array2.isArray(value)
export isObject = value => %raw("!!value") && !isArray(value) && is(value, "object")
export isFunction = value => is(value, "function")
export isError = %raw("value => value instanceof Error")
export isDate = %raw("value => value instanceof Date")
export isNullable = value => Js.Nullable.isNullable(value)
export isNotNullable = value => !isNullable(value)
export isNull = %raw("value => value === null")
export isUndefined = %raw("value => value === undefined")
export isNot = (value, predicateFn) => !predicateFn(value)
