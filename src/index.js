
exports.min = function min(array) {
  // We sort this array ascending, so 1st arr element is equal to min
  array.sort((a, b) => a - b);
  //Return 1st arr element
  return array[0];
}

exports.max = function max(array) {
  // We sort this array decending, so 1st arr element is equal to max
  array.sort((a, b) => b - a);
  //Return 1st arr element
  return array[0];
}

exports.avg = function avg(array) {
  //Calculate average by summarazing all array elements and than divide
  let result = array.reduce((sumOfElements, nextElement) => sumOfElements + nextElement, 0) / array.length;
  return result;
}
