// input - 2 - array of nums, target num
// output - 1 - array of 2 indicies

// function twoSum that accepts a sorted array of nums and a target num and returns the indicies of 2 nums that add to the target
const twoSum = (numbers, target) => {
  // initialize 2 pointers to start at the beginning and end of the array of sorted nums
  let p1 = 0;
  let p2 = numbers.length-1;
  // while the first pointer is less than second (if it goes above, there's no result)
  while (p1 < p2) {
    // store current sum in a variable
    const sum = numbers[p1] + numbers[p2];
    // if current sum is greater than the target, decrement 2nd pointer
    if (sum > target) p2--;
    // if current sum is less, increment first pointer
    else if (sum < target) p1++;
    // if no conditions hit, sum === target
    else return [p1 + 1, p2 + 1];
  }
  // return empty array if doesn't enter while loop
  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([-1, 0], -1));

