var alizhim = function () {
  function forEach(array, fn) {
    for (var i = 0; i < array.length; i++) {
      fn(array[i], i, array)
    }
    return array
  }

  function concat (arr,...arg) {
    let result = arr
    for(let item of arg){
        if(Array.isArray(item)){
            for(let subitem of item){
                result.push(subitem)
            }
        }else{
            result.push(item)
        }
    }
    return result
  }

  function once (predicate) {
    var done = false
    return function () {
      done = true
      return predicate.apply(this, arguments)

    }
  }

  function property(prop) {
    return function (obj) {
      return obj[prop]
    }
  }

  function matches(obj) {
    return function (src) {
      for (let key in obj) {
        if (obj[key] !== src[key]) {
          return false
        }
      }
      return true
    }
  }

  function matchesProperty(ary) {
      let key = ary[0]
    let val = ary[1]
    return function (obj) {
      return obj[key] == val
    }
  }

  function map(collection, mapper) {
    if (typeof mapper == 'string') {
      mapper = property(mapper)
    }
    if (Array.isArray(mapper)) {
      mapper = matchesProperty(...mapper)
    }
    if (typeof mapper == 'object') {
      mapper = matches(mapper)
    }
    let result = []
    for (let key in collection) {
      result.push(mapper(collection[key], key, collection))
    }
    return result
  }

  function filter(collection, predicate) {
    if (typeof predicate == 'string') {
      mapper = property(predicate)
    }
    if (Array.isArray(predicate)) {
      mapper = matchesProperty(...predicate)
    }
    if (typeof predicate == 'object') {
      mapper = matches(predicate)
    }
    let result = []
    if (predicate(collection[key], key, collection) == true) {
      result.push(collection[key])
    }
    return result
  }

  var every = (array,predicate) => {
    var result = true
    for (let value of array) {
      result = predicate (value)
          if (!result) {
            break
          }
  ``}
  return result 
  }

  var some = (array,predicate) => {
    var result = true
    for (let value of array) {
      result = predicate(value)
          if (result) {
            break
          }
    }
  return result 
  }

  function sum(array) {
    total = 0
    for (var i = 0; i < array.length; i++) {
      total += array[i]
    }
    return total
  }

  function chunk(array, size = 1) {
    if (array.length < 1) {
      return []
    }
    size = size > 0 ? size : 1
    let result = []
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size))
    }
    return result
  }

  function slice(array, start, end) {
    let length = array == null ? 0 : array.length
     // ??????array???null???length???0????????????array.length
    if (!length) {
      return []
    }
     // ??????length???0?????????????????????
    start = start == null ? 0 : start
    // ?????????????????????start????????????????????????????????????0???????????????????????????
    end = end == null ? 0 : end
     // ?????????????????????end????????????????????????????????????array????????????????????????????????????
    if (start < 0) {
      start = -start > length ? 0 : (length + start)
    }
    // ??????start??????0?????????
    // ??????start??????0???-start????????????array???????????????start???0?????????start??????????????????start??????
    end = end > length ? length : end
     // ???end???????????????????????????end??????????????????
    if (end < 0) {
      end += length
    }
    // ??????end??????0?????????
    // ???end??????0??????end??????????????????end??????
    length = start > end ? 0 : ((end - start) >>> 0)
    // ??????start??????end??????length???0????????????end-start???
    // ??????(end-start) >>> 0???????????????(end-start)???????????????????????????????????????????????????????????????https://segmentfault.com/a/1190000014613703
    // ????????????????????????length?????????????????????????????????
    start >>= 0
    // ??????start??????????????????????????????
    let index = -1
    // ????????????index????????????????????????result????????????
    const result = new Array(length)
     // ??????????????????result???????????????length
    while (++index < length) {
      result[index] = array[index + start]
    }
    // ????????????result??????????????????array???index+start????????????????????????result?????????index???????????????
    return result
  }

  function indexOf(array, value, fromIndex = 0) {
    for (let i = fromIndex ; i < array.length; i++) {
      if (array[i] === value) {
        return i
      }
    }
    return -1
  }

  function lastIndexOf(array, value, fromIndex = array.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
      if (array[i] === value) {
        return i
      }
    }
    return -1
  }

  function fill(ary, value, start = 0, end = ary.length) {
    for (let i = start; i < end; i++) {
      ary[i] = value
    }
    return ary
  }

  function range(start, end, step) {
    if (arguments.length === 1) {
      end = start
      start = 0
    }
    if (step === undefined) {
      if (end > start) {
        step = 1
      } else {
        step = -1
      }
    }
    let result = []
    if (end > start) {
      if (step < 0) {
        return result
      }
      if (step = 0) {
        for (i = start; i < end; i++) {
          result.push(i)
        }
      }
      for (let i = start; i < end; i += step) {
        result.push(i)
      }
    } else {
      if (step > 0) {
        return result
      }
      if (step = 0) {
        for (i = start; i > end; i++) {
          result.push(i)
        }
      }
      for (let i = start; i > end; i += step) {
        result.push(i)
      }
    }
    return result
  }

  function reverse(ary) {
    let i = 0
    let j = ary.length - 1
    while (i < j) {
      let t = ary[i]
      ary[i] = ary[j]
      ary[j] = t
      i++
      j--
    }
    return ary
  }

  function compact(ary) {
    let result = []
    for (let i = 0; i < ary.length; i++) {
      if (ary[i]) {
        result.push(ary[i])
      }
    }
    return result
  }

  function drop(ary, n = 1) {
    let result = []
    for (let i = n; i < ary.length; i++) {
      result.push(ary[i])
    }
    return result
  }

  function dropRight(ary, n = 1) {
    let result = []
    if (n > ary.length) {
      return []
    }
    for (let i = 0; i < ary.length - n; i++) {
      result.push(ary[i])
    }
    return result
  }

  function difference(ary, ...value) {
    let result = []
    let cur = concat(...value)
    for (let i = 0; i < ary.length; i++) {
      if (cur.indexOf(ary[i]) === -1) {
        result.push(ary[i])
      }
    }
    return result
  }

  function head(ary) {
    if (arguments.length === 0) {
      return undefined
    }
    return ary[0]
  }

  function initial(ary) {
    let result = []
    for (let i = 0; i < ary.length - 1; i++) {
      result.push(ary[i])
    }
    return result
  }

  function flatten(ary) {
    return [].concat(...ary)
  }

  function uniq(ary) {
    return Array.from(new Set(ary))
  }

  function parseJson(str) {
    var i = 0
    return parseValue()

    function parseValue() {
      var c = str[i]
      if (c == '[') {
        return parseArray()
      }
      if (c == '{') {
        return parseObject()
      }
      if (c == '"') {
        return parseString()
      }
      if (c == 't') {
        return parseTrue()
      }
      if (c == 'f') {
        return parseFalse()
      }
      if (c == 'n') {
        return parseNull()
      }
      return parseNumber
    }
    function parseTrue() {
      i += 4
      return true
    }
    function parseFalse() {
      i += 5
      return false
    }
    function parseNull() {
      i += 4
      return null
    }
    function parseString() {
      i++ // ?????????????????????
      var result = ''
      while (str[i] != '"') {
        result += result[i++]
      }
      i++
      return result
    }
    function parseArray() {
      i++  //skip [
      var result = []
      while (str[i] != ']') {
        var val = parseValue()
        result.push(val)
        if (str[i] == ',') {
          i++
        } 
      }
      i++
      return result
    }
    function parseObject() {
      i++
      var result = {}
      while (str[i] != '}') {
        var key = parseString()
        i++ // ????????????
        var val = parseValue()
        result[key] = val
        if (str[i] == ',') {
          i++
        }
      }
      return result
    }
    function parseNumber() {
      let numStr = ''
      while (str[i] >= '0' && str[i] <= '9') {
        numStr += str[i++]
      }
      return Number(numStr)
    }
  }

  function jsonStringify(obj) {
    let type = typeof obj
    if (type !== "object" || type === null) {
      if (/string|undefined|function/.test(type)) {
        obj = '"' + obj + '"';
      }
      return String(obj);
    } else {
      let json = []
      arr = (obj && obj.constructor === Array);
      for (let k in obj) {
        let v = obj[k];
        let type = typeof v;
        if (/string|undefined|function/.test(type)) {
          v = '"' + v + '"';
        } else if (type === "object") {
          v = jsonStringify(v);
        }
        json.push((arr ? "" : '"' + k + '":') + String(v));
      }
      return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}")
    }
  }


  function identity(val) {
    return val
  }

  

  function groupBy(array, predicate = it => it) {
    let result = {}
    for (let i = 0; i < array.length; i++) {
      let key = predicate(array[i], i, array)
      if (!Array.isArray(result[key])) {
        result[key] = []
      }
      result[key].push(array[i])
    }
    return result
  }

  function sumBy(array, predicate = it => it) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
      sum += predicate(array[i], i, array)
    }
    return sumBy
  }

  function mapValues(obj, mapper) {
    let result = {}
    for (let key in obj) {
      let val = obj[key]
      result[key] = mapper(val, key, obj)
    }
    return result
  }

  function mapKeys(obj, mapper) {
    let result = {}
    for (let key in obj) {
      let val = obj[key]
      result[mapper(val, key, obj)] = val
    }
    return result
  }

  function differenceBy(array, ...args) {
    if (isArray(args[args.length - 1])) {
      return difference(array, ...args)
    }
    let callback = iteratee(args.pop())
    let group = concat([], ...args)
    group = map(group, callback)
    return filter(array, function (value) {
      return includes(group, callback(value)) == false
    })
}
  return {
    forEach: forEach,
    concat: concat,
    filter: filter,
    once: once,
    map: map,
    every: every,
    some: some,
    sum: sum,
    chunk: chunk,
    slice: slice,
    indexOf: indexOf,
    lastIndexOf: lastIndexOf,
    fill: fill,
    range: range,
    reverse: reverse,
    compact: compact,
    drop: drop,
    dropRight: dropRight,
    difference: difference,
    head: head,
    initial: initial,
    parseJson: parseJson,
    flatten: flatten,
    uniq: uniq,
    jsonStringify: jsonStringify,
    matches: matches,
    property: property,
    matchesProperty: matchesProperty,
    groupBy: groupBy,
    identity: identity,
    sumBy: sumBy,
    mapValues: mapValues,
    mapKeys: mapKeys,
    differenceBy: differenceBy,
  }
}()