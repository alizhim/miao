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
  function filter (arr, function) {
    var result = []
    for (var i = 0; i < arr.length; i++) {
      if (function(arr[i])) {
        result.push(arr[i])
      }
    }
    return result
  }
  function once (fn) {
    var done = false
    return function () {
      done = true
      return fn.apply(this, arguments)

    }
  }
  var map = (array,function) => {
    var result = []
    for (let value of array) {
      result.push(function (value))
    }
    return result
  }
  var every = (array,function) => {
    var result = true
    for (let value of array) {
      result = function (value)
          if (!result) {
            break
          }
  ``}
  return result 
  }
  var some = (array,function) => {
    var result = true
    for (let value of array) {
      result = function (value)
          if (result) {
            break
          }
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
  }
}()