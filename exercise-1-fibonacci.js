// returns x digits from the fibonacci sequence
// iterative
function fibs(num) {
  let array = [0, 1];
  for (i = 2; i < num; i++) {
    array = array.concat(array.slice(-1)[0] + array.slice(-2, -1)[0]);
  }
  return array;
}

console.log(fibs(8));

// returns x digits from the fibonacci sequence
// recursive
function fibsRec(num, array = [0, 1]) {
  const max = num;
  if (num > 0) {
    array = array.concat(array.slice(-1)[0] + array.slice(-2, -1)[0]);
    return fibsRec(num - 1, array);
  }
  return array.slice(0, array.length - 2);
}
console.log(fibsRec(7));

// add last + second last to Array
