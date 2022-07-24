const axios = require('axios');

const getRelevantFoodOutlets = async (city, maxCost) => {
  const outputArr = [];

  const res = await axios.get(`https://jsonmock.hackerrank.com/api/food_outlets?city=${city}&page=1`);
  for (let i = 0; i < res.data.data.length; i++) {
      if (res.data.data[i].estimated_cost < maxCost){
          outputArr.push(res.data.data[i].name);
      }
  }
  for (let i = 2; i < res.data.total_pages; i++) {
      const res2 = await axios.get(`https://jsonmock.hackerrank.com/api/food_outlets?city=${city}&page=${i}`);
      for (let j = 0; j < res2.data.data.length; j++) {
          if (res2.data.data[j].estimated_cost < maxCost) {
              outputArr.push(res2.data.data[j].name);
          }
      }
  }
  return outputArr;
};

const res = getRelevantFoodOutlets('Houston', 30);
console.log(res);