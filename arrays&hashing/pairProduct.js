/*
Write a function, pairProduct, that takes in an array and a target product as arguments. 
The function should return an array containing a pair of indices whose elements multiply to the given target. 
The indices returned must be unique.

Be sure to return the indices, not the elements themselves.

There is guaranteed to be one such pair whose product is the target.
*/

// initialize function that accepts 2 arguments, an array and a target
const pairProduct = (arr, tar) => {
  // initialize a cache to store results
  const cache = {};
  // iterate through array of nums
  for (let i = 0; i < arr.length; i++) {
    // check if division of tar and array index exists
    if (tar / arr[i] in cache) {
      console.log([cache[tar / arr[i]], i]);
      return [cache[tar / arr[i]], i];
    }
    else {
      cache[arr[i]] = i;
    }
  }
};

pairProduct([3, 2, 5, 4, 1], 8); // -> [1, 3]

pairProduct([3, 2, 5, 4, 1], 10); // -> [1, 2]

pairProduct([4, 7, 9, 2, 5, 1], 5); // -> [4, 5]

pairProduct([4, 7, 9, 2, 5, 1], 35); // -> [1, 4]

pairProduct([3, 2, 5, 4, 1], 10); // -> [1, 2]

pairProduct([4, 6, 8, 2], 16); // -> [2, 3]