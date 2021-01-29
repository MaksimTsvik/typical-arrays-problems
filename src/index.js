
exports.min = function min(array) {
  array.sort((a, b) => a - b); // We sort this array ascending, so 1st arr element is equal to min
  return array[0]; //Return 1st arr element
}

exports.max = function max(array) {
  return 0;
}

exports.avg = function avg(array) {
  return 0;
}
