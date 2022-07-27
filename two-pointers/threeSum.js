const threeSum = nums => {
  nums = nums.sort((a,b) => a - b);

  const outputArr = [];

  for (let i = 0; i < nums.length; i++) {
    let p1 = i + 1;
    let p2 = nums.length - 1;

    while (p1 < p2) {
      let sum = nums[p1] + nums[p2] + nums[i];
      if (sum === 0) {
        outputArr.push([nums[i], nums[p1], nums[p2]]);
        p1 += 1;
        p2 -= 1;
      }
      else if (sum > 0) p1++;
      else if (sum < 0) p2--;
    }
  }
  return outputArr;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// [-4, -1, -1, 0, 1, 2]