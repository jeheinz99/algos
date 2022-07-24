/*
Write a function, uncompress, that takes in a string as an argument. 
The input string will be formatted into multiple groups according to the following pattern:

<number><char>

for example, '2c' or '3a'.

The function should return an uncompressed version of the string where each 'char' of a 
group is repeated 'number' times consecutively. 
You may assume that the input string is well-formed according to the previously mentioned pattern.
*/

/*
test_00:

uncompress("2c3a1t"); // -> 'ccaaat'

test_01:

uncompress("4s2b"); // -> 'ssssbb'

test_02:

uncompress("2p1o5p"); // -> 'ppoppppp'

test_03:

uncompress("3n12e2z"); // -> 'nnneeeeeeeeeeeezz'

test_04:

uncompress("127y"); // ->'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
*/

// function uncompress that accepts 1 string and returns the 'uncompressed version' of the string
const uncompress2 = s => {
  const numbers = '1234567890';
  let i = 0;
  let j = 0;
  let string = [];
  while (j < s.length) {

    if (numbers.includes(s[j])) {
      j++;
    }
    else {
      const num = Number(s.slice(i, j));
      string.push(s[j].repeat(num));
      j++;
      i = j;
    };

  };
  return string.join('');
};

const uncompress = s => {

};


let str = "3n12e2z";
for (let i = 0; i < str.length; i++) {
  let num = Number(str[i]);
  console.log(isNaN(num));
}