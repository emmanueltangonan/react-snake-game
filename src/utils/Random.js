const Random = {
  getRandomInts: (max, randomIntRequired) => {
    const randomIntegers = [];
    
    let randomInteger;
    do {
      randomInteger = Math.floor(Math.random() * max);
      
      while(randomIntegers.includes(randomInteger)){
        randomInteger = Math.floor(Math.random() * max);
      }

      randomIntegers.push(randomInteger);

    } while (randomIntRequired > randomIntegers.length);

    return randomIntegers;
  }
};

export default Random;