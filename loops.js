function checkEvenOdd(number) {
    if (number % 2 === 0) {
      console.log(`${number} is even.`);
    } else {
      console.log(`${number} is odd.`);
    }
  }
  

  checkEvenOdd(5);  // Output: "5 is odd."
  checkEvenOdd(8);  // Output: "8 is even."




  function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  

  let numbers = [1, 2, 3, 4, 5];
  console.log(sumArray(numbers));  // Output: 15
  
  