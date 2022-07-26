const cards = [1, 2, 3, 4 ,5];

const pickRandomCard = (cards) => {
  const randomIndex = Math.floor(Math.random() * 5);
  const card = cards.splice(randomIndex, 1);
  console.log(cards, 'cards');
  return card;
};

console.log(pickRandomCard(cards));

