const minimalOperations = words => {
  const newArr = [];

  for (let i = 0; i < words.length; i++) {
    let counter = 0;
    let p1 = 0;
    let p2 = 0;

    for (let j = 0; j < words[i].length; j++) {
      console.log(words[i][p1], 'p1');
      console.log(words[i][p2], 'p2');
      while (words[i][p1] === words[i][p2] && p2 < words[i].length) {
        p2++;
      }
      if ((p2 - p1) > 1) {
        const diff = Math.floor ((p2 - p1) / 2);
        counter += diff;
      }
      p1 = p2;
    }
    newArr.push(counter);
  }
  return newArr;
};

const words = ['add', 'boook', 'break'];
console.log(minimalOperations(words));