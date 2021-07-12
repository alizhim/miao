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
  function filter (arr, predicate) {
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
  function fill(array, value, start, end) {
    var length = array == null ? 0 : array.length
    if (!length) {
      return []
    }
    if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
      start = 0;
      end = length;
    }
    return baseFill(array, value, start, end);
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
    fill: fill
  }
}()