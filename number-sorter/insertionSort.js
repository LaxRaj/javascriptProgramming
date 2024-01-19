const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
      const currValue = array[i];
      let j = i - 1;
  
      while (j >= 0 && array[j] > currValue) {
        array[j + 1] = array[j];
        j--;
      }
      array[j + 1] = currValue;
    }
    return array;
  }