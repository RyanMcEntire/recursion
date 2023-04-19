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

// function mergeSort(array) {
//   let left = [];
//   let right = [];
//   let leftMerge = [];
//   let newLeft = [];
//   let newRight = [];
//   if (array.length > 1) {
//     console.log('array:', array);
//     const middle = Math.floor(array.length / 2);
//     console.log('middle:', middle);
//     console.log('');
//     left = array.slice(0, middle);
//     console.log('left', left);
//     right = array.slice(middle, array.length);
//     console.log('right', right);
//     leftMerge = mergeSort(left);
//     rightMerge = mergeSort(right);
//     console.log('leftMerge:', leftMerge, 'rightMerge', rightMerge);
//     console.log('');
//   }
//   console.log('returned array', array);
//   console.log('leftmerge bool', !leftMerge);
//   if (leftMerge.length < 1) {
//     leftMerge.push(array.shift());
//     console.log(leftMerge);
//   } else if (rightMerge.length < 1) {
//   }
//   return array;
// }

// l = [4, 3, 6, 7, 2, 8, 5, 1];
// console.log('"mergeSort()"', mergeSort(l));

// function mergeSort(array) {
//   console.log('array', array);
//   let left = [];
//   let right = [];

//   if (array.length > 1) {
//     const middle = Math.floor(array.length / 2);
//     left = array.slice(0, middle);
//     right = array.slice(middle, array.length);

//     if (mergeSort(left) < mergeSort(right)) {
//       array.push(mergeSort(left).shift());
//       array.push(mergeSort(right).shift());
//       console.log('mergesort array 1', array);
//       return array;
//     } else {
//       array = mergeSort(right).concat(mergeSort(left));
//       console.log('mergesort array 2', array);
//       return ;rray
//     }
//   }
//   return array;
// }

// l = [4, 3, 6, 7, 2, 8, 5, 1];
// console.log('"mergeSort()"', mergeSort(l));

// function mergeSort(array) {
//   console.log('array', array);
//   let left = [];
//   let right = [];

//   return array;
// }

// function mergeSort(array) {
//   console.log('array:', array);
//   let low = array.indexOf(array[0]);
//   let high = array.indexOf(array[array.length - 1]);
//   if (low < high) {
//     let mid = Math.floor(array.length / 2);
//     let left = array.slice(low, mid);
//     let right = array.slice(mid, high + 1);
//     mergeSort(left);
//     mergeSort(right);
//     console.log(
//       'low',
//       low,
//       'high',
//       high,
//       'mid',
//       mid,
//       'left',
//       left,
//       'right',
//       right
//     );
//     let i = 0;
//     let j = 0;
//     let k = 0;
//     let copy = [];
//     console.log('i:', i, 'j:', j, 'k:', k, 'mid:', mid);
//     while (low <= mid - 1 && mid <= high) {
//       if (left[i] < right[j]) {
//         copy[k++] = left[i++];
//         k++;
//         i++;
//       } else copy[k++] = right[j++];
//       console.log(copy);
//     }
//     for (i <= mid - 1; i++; ) {
//       copy[k++] = left[i];
//     }
//     for (j <= high; j++; ) {
//       copy[k++] = right[j];
//     }
//     array = copy;
//   }
//   return array;
// }

// l = [4, 3, 6, 7, 2, 8, 5, 1];
// console.log('"mergeSort()"', mergeSort());

function mergeSort(array) {
  let low = array.indexOf(array[0]);
  let high = array.length - 1;
  if (low < high) {
    let mid = Math.floor(array.length / 2);
    let left = array.slice(low, mid);
    let right = array.slice(mid, high + 1);
    mergeSort(left);
    mergeSort(right);
    let i = 0;
    let j = 0;
    let k = 0;
    let copy = [];
    while (low <= mid - 1 && mid <= array.length - 1) {
      if (left[i] < right[j]) {
        copy[k] = left[i];
        k++;
        i++;
      }
      if (right[j] < left[i]) {
        copy[k] = right[j];
        k++;
        j++;
      }
    }
    for (i <= mid - 1; i++; ) {
      copy[k++] = left[i];
    }
    for (j <= high; j++; ) {
      copy[k++] = right[j];
    }
    while (i <= mid) {
      array[k++] = copy[i++];
    }
  }
  return array;
}

l = [4, 3, 6, 7, 2, 8, 5, 1];
console.log('"mergeSort()"', mergeSort(l));
