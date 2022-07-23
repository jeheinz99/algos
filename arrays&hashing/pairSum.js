/*
Write a function, pairSum, that takes in an array and a target sum as arguments.
The function should return an array containing a pair of indices whose elements sum to the given target. 
The indices returned must be unique.

Be sure to return the indices, not the elements themselves.

There is guaranteed to be one such pair that sums to the target.
*/

// initialize function that accepts 2 arguments, an array and a target
const pairSum = (arr, tar) => {
  // initialize a cache to store results
  const cache = {};
  // iterate through array of nums
  for (let i = 0; i < arr.length; i++) {
    // check if difference of tar and arr[i] exists
    if (tar - arr[i] in cache) {
      // if it does, return it and its index
      console.log([cache[tar-arr[i]], i]);
      return [cache[tar - arr[i]], i];
      // otherwise, add to cache
    } else {
      cache[arr[i]] = i;
    }
  }
};

// initialize function pairSum2 (iteratively)
const pairSum2 = (arr, tar) => {
  // iterate through array of nums
  for (let i = 0; i < arr.length; i++) {
    // for each index, iterate through the rest of the array
    for (let j = i+1; j < arr.length; j++) {
      // check if they add up to target num and they are not the same index, if they do return indices
      if (arr[i] + arr[j] === tar && i !== j) {
        console.log([i, j]);
        return [i, j];
      }
    }
  }
  
};

pairSum([3, 2, 5, 4, 1], 8); // -> [0, 2]

pairSum([4, 7, 9, 2, 5, 1], 5); // -> [0, 5]

pairSum([4, 7, 9, 2, 5, 1], 3); // -> [3, 5]

pairSum([1, 6, 7, 2], 13); // -> [1, 2]

pairSum([9, 9], 18); // -> [0, 1]

pairSum([6, 4, 2, 8 ], 12); // -> [1, 3]