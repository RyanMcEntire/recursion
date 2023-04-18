// is array bigger than 1?
// if not, store in A
// check if array in B
// if no array in B, return A
// if is array in B, repeat from step 1
// if array is bigger than one, split the array
// left array, and right array
// for left array, if its a size of one, go to right
// if right is size of 1, do the merge
// if left is less than right,
// push left to A
// then push right to a
// else push right to a
// then push left to a
// then for right array, do the same thing
// repeat until there is only 1 array

// things that repeat...
// greater than 1 and split
// compare and merge

// my pseudo code doesn't feel organized at all but...
// how hard could it be? 😎
//

function mergeSort(array) {
  let left = [];
  let right = [];
  let leftMerge = [];
  let newLeft = [];
  let newRight = [];
  if (array.length > 1) {
    console.log('array:', array);
    const middle = Math.floor(array.length / 2);
    console.log('middle:', middle);
    console.log('');
    left = array.slice(0, middle);
    console.log('left', left);
    right = array.slice(middle, array.length);
    console.log('right', right);
    leftMerge = mergeSort(left);
    rightMerge = mergeSort(right);
    console.log('leftMerge:', leftMerge, 'rightMerge', rightMerge);
    console.log('');
  }
  console.log('returned array', array);
  console.log('leftmerge bool', !leftMerge);
  if (leftMerge.length < 1) {
    leftMerge.push(array.shift());
    console.log(leftMerge);
  } else if (rightMerge.length < 1) {
  }
  return array;
}

l = [4, 3, 6, 7, 2, 8, 5, 1];
console.log('"mergeSort()"', mergeSort(l));
