/*
Write a function, mostFrequentChar, that takes in a string as an argument. 
The function should return the most frequent character of the string. 
If there are ties, return the character that appears earlier in the string.

You can assume that the input string is non-empty.
*/

// input - 1 - string
// output - 1 - string of most frequent character

// function mostFrequentChar that accepts 1 string and returns the most frequently seen character
const mostFrequentChar = s => {
  const cache = {};
  let max = -Infinity;
  let mostFreq = '';
  for (letter in s) cache[s[letter]] ? cache[s[letter]] += 1 : cache[s[letter]] = 1;

  for (let key in cache) {
    if (cache[key] > max) {
      max = cache[key];
      mostFreq = key;
    }
  }

  return mostFreq;
};

mostFrequentChar('bookeeper'); // -> 'e'

mostFrequentChar('david'); // -> 'd'

mostFrequentChar('abby'); // -> 'b'

mostFrequentChar('mississippi'); // -> 'i'

mostFrequentChar('potato'); // -> 'o'

mostFrequentChar('eleventennine'); // -> 'e'

mostFrequentChar("riverbed"); // -> 'r'