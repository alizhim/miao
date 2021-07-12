var damiao = function () {
  function foreach(array, fn) {
    for (var i = 0; i < array.length; i++) {
      fn(array[i], i, array)
    }
    return array
  }
  return {
    foreach: foreach,
  }
}