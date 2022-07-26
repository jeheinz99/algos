const productExceptSelf = nums => {
  const outputArr = [];
  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        product *= nums[j];
      }
    }
    outputArr.push(product);
  }
  return outputArr;
};

console.log(productExceptSelf([1, 2, 3, 4]));