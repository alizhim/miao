var alizhim = function () {
  function forEach(array, fn) {
    for (var i = 0; i < array.length; i++) {
      fn(array[i], i, array)
    }
    return array
  }
  return {
    forEach: forEach,
  }
}