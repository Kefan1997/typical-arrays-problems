
exports.min = function min (array) {
    if (!array || array.length === 0) return 0;
  return Math.min.apply(null, array);
}


exports.max = function max (array) {
    if (!array || array.length === 0) return 0;
  return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
    if (!array || array.length === 0) return 0;
    let sum = 0;
    let average = 0;
    for(let i = 0; i< array.length; i++){
        sum += array[i];
    }
    console.log(sum);
    average = Math.trunc((sum / array.length ) * 100) ;
    console.log(average)
    average /= 100;
  return average;
}
