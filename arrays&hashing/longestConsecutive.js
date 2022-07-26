const longestConsecutive = nums => {
  // check if input array is empty
  if (!nums.length) return 0;
  let cache = {};
  let maxConsecutive = 1;
  
  for (let i = 0; i < nums.length; i++) {
    cache[nums[i]] = true;
  }

};