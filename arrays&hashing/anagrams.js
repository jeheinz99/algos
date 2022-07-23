/*
Write a function, anagrams, that takes in two strings as arguments. 
The function should return a boolean indicating whether or not the strings are anagrams. 
Anagrams are strings that contain the same characters, but in any order.
*/
const anagrams = (s1, s2) => {

  if (s1.length !== s2.length) {
    console.log(false);
    return false;
  }

  const obj1 = {};
  const obj2 = {};

  for (letter of s1) obj1[letter] ? obj1[letter] +=1 : obj1[letter] = 1;
  for (letter of s2) obj2[letter] ? obj2[letter] +=1 : obj2[letter] = 1;
  for (key in obj1) {
    if (obj1[key] !== obj2[key]) {
      console.log(false);
      return false;
    }
  }

  console.log(true);
  return true;

};

anagrams('restful', 'fluster'); // -> true

anagrams('cats', 'tocs'); // -> false

anagrams('monkeyswrite', 'newyorktimes'); // -> true

anagrams('paper', 'reapa'); // -> false

anagrams('elbow', 'below'); // -> true

anagrams('tax', 'taxi'); // -> false

anagrams('taxi', 'tax'); // -> false

anagrams('night', 'thing'); // -> true

anagrams('abbc', 'aabc'); // -> false