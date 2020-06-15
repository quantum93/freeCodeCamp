function largestOfFour(arr) {
    let maxNumber = 0;
    let maxArray = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] > maxNumber) {
          maxNumber = arr[i][j];
        } else {
          maxNumber = Math.max(...arr[i])
        }
      }
      maxArray.push(maxNumber);
      maxNumber = 0;
    }
    return maxArray;
  }
  
 // largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
 
 function confirmEnding(str, target) {
     return str;
 }

 console.log(confirmEnding("Bastian", "n"));