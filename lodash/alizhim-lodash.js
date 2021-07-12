var alizhim = function () {
  function forEach(array, fn) {
    for (var i = 0; i < array.length; i++) {
      fn(array[i], i, array)
    }
    return array
  }
  function concat(arr,...arg) {
    let result = arr;
    for(let item of arg){
        if(Array.isArray(item)){
            for(let subitem of item){
                result.push(subitem);
            }
        }else{
            result.push(item);
        }
    }
    return result;
}
module.exports = concat;
  return {
    forEach: forEach,
    concat: concat
  }
}