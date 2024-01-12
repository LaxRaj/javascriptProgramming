const decimalToBinary = (input) => {
    let binary = "";
  
    if (input === 0) {
      binary = "0";
    }
  
    while (input > 0) {
      binary = (input % 2) + binary;
      input = Math.floor(input / 2);
    }
  
    result.innerText = binary;
  };

  // one more way to do decimal conversion