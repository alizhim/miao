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
  function filter (arr, predicate=_.identity) {
    var result = []
    for (var i = 0; i < arr.length; i++) {
      if (predicate(arr[i])) {
        result.push(arr[i])
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
  var map = (array,predicate) => {
    var result = []
    for (let value of array) {
      result.push(predicate (value))
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
  function chunk (array, size) {
    size = Math.max(size, 0)
    const length = array == null ? 0 : array.length
    if (!length || size < 1) {
      return []
    }
    let index = 0
    let resIndex = 0
    const result = new Array(Math.ceil(length / size))
  
    while (index < length) {
      result[resIndex++] = slice(array, index, (index += size))
    }
    return result
  }
  function slice(array, start, end) {
    let length = array == null ? 0 : array.length
     // 如果array为null，length为0，否则取array.length
    if (!length) {
      return []
    }
     // 如果length为0，则返回空数组
    start = start == null ? 0 : start
    // 判断第二个参数start有没有传值，没有传值则取0，传值则取传入的值
    end = end == null ? 0 : end
     // 判断第三个参数end有没有传值，没有传值则取array的长度，传值则取传入的值
    if (start < 0) {
      start = -start > length ? 0 : (length + start)
    }
    // 处理start小于0的情况
    // 如果start小于0且-start的值大于array的长度，则start取0，否则start取数组长度加start的值
    end = end > length ? length : end
     // 当end值大于数组长度时，end取数组的长度
    if (end < 0) {
      end += length
    }
    // 处理end小于0的情况
    // 当end小于0时，end取数组长度加end的值
    length = start > end ? 0 : ((end - start) >>> 0)
    // 如果start大于end，则length取0，否则取end-start值
    // 其中(end-start) >>> 0作用是保证(end-start)是一个有意义的正整数，详细可参考这篇文章：https://segmentfault.com/a/1190000014613703
    // 执行下面语句后，length值将变为返回数组的长度
    start >>= 0
    // 确保start为一个有意义的正整数
    let index = -1
    // 定义一个index，后面将作为数组result的索引值
    const result = new Array(length)
     // 定义返回数组result，其长度为length
    while (++index < length) {
      result[index] = array[index + start]
    }
    // 遍历数组result，并将原数组array中index+start对应的元素添加到result数组中index对应的位置
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
    if (step === 0) {
      for (let i = start; i < end; i++) {
        result.push(i)
      }
    }
    let result = []
    if (end > start) {
      if (step < 0) {
        return result
      }
      for (let i = start; i < end; i += step) {
        result.push(i)
      }
    } else {
      if (step > 0) {
        return result
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
  }
}()