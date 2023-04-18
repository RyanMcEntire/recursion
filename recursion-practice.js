// sum all numbers
function sumRange(num) {
  if (num == 1) {
    return 1;
  }
  return (num += sumRange(num - 1));
}
console.log(sumRange(8));

// power function
function power(base, ex) {
  if (ex == 0) {
    return 1;
  }
  return base * power(base, ex - 1);
}
console.log(power(2, 4));

// calculate factorial
function factorial(num) {
  if (num == 1) {
    return 1;
  }
  return num * factorial(num - 1);
}
console.log(factorial(5));

// Check all values in an array
function all(array, cb) {
  const copy = [...array];
  if (copy.length === 0) {
    return true;
  }
  if (cb(copy[0])) {
    copy.shift();
    return all(copy, cb);
  } else {
    return false;
  }
}
const allAreLessThanSeven = all([1, 5, 6], function (num) {
  return num < 7;
});
console.log(allAreLessThanSeven);

// Product of an array
function productOfArray(array) {
  if (array.length === 0) {
    return 1;
  }
  return array.shift() * productOfArray(array);
}
console.log(productOfArray([1, 2, 3, 10]));

// search js object
function contains(object, thing) {
  for (let key in object) {
    if (object[key].constructor == Object) {
      return contains(object[key], thing);
    }
    if (object[key] === thing) return true;
  }
  return false;
}

var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2',
          },
        },
      },
    },
  },
};

console.log(contains(nestedObject, 'foo2'));

// Parse a multi-dimensional array.
function totalIntegers(array) {
  if (array.length === 0) {
    return 0;
  }
  let total = 0;
  let first = array.shift();

  if (Array.isArray(first)) {
    total += totalIntegers(first);
  } else if (Number.isInteger(first)) {
    total += 1;
  }
  return total + totalIntegers(array);
}

const myArray = 3;
console.log(totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]));

// write a function that sums squares of numbers in list that may contain more lists
function sumSquares(array) {
  if (array.length === 0) {
    return 0;
  }

  let sum = 0;
  array.forEach(function (item) {
    if (Array.isArray(item)) {
      sum += sumSquares(item);
    } else {
      sum += item * item;
    }
  });
  return sum;
}

const l = [1, 2, 3];
const m = [[1, 2], 3];
const n = [[[[[[[[[1]]]]]]]]];
const o = [10, [[10], 10], [10]];
console.log(sumSquares(l), sumSquares(m), sumSquares(n), sumSquares(o));

// return array containing repetitions of the number argument
function replicate(times, number) {
  if (times <= 0) {
    return [];
  }
  return [number].concat(replicate(times - 1, number));
}

console.log(replicate(10, 7));
