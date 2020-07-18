
  const shuffleArray = array => {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * i);
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      };
      return array;
  };
  console.log(shuffleArray([1, 2, 3,4 ,5, 6,7 ,8]));
  
