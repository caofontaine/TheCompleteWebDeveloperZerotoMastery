/*
  Write a javascript function that takes an array of numbers and a target number.
  The function should find two different numbers in the array that, when added together, give the target number.
  For example: answer([1,2,3], 4)should return [1,3]
*/

const numArray = [1,2,3];

const arraySum = (array, target) => {
  let copyArray = [].concat(array); //array.slice();
  let resultArray = [];

  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < copyArray.length; j++) {
      // Ensures only the first occurance of sum is collected.
      if(((array[i] + copyArray[j]) === target) && (resultArray.length === 0)) {
        resultArray.push(array[i], copyArray[j]);
      }
    }
  }

  console.log(resultArray);
}

arraySum(numArray, 4);
