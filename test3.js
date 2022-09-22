const singleNumber = nums => {
  let num = 0;
  for (let n of nums) {
    num ^= n;
    console.log(num);
  }
  return num;
}

console.log(singleNumber([1, 4, 2, 4, 2]));