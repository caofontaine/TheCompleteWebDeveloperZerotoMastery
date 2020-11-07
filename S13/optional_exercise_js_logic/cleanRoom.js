/*
  Clean the room function:
  Given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered.
  For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].
  Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]
*/

const inputArray1 = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
const inputArray2 = [1, "2", "3", 2];

var formatArray = (array) => {
  let sortedArray = array.sort((a,b)=>a-b);
  let resultArray = [];
  let tempArray = [];
  //In the event there is a mix of numbers and strings, filter them out into respective array data types.
  let stringArray = sortedArray.filter(a => typeof a === "string");
  let numArray = sortedArray.filter(a => typeof a === "number");
  
  for(let i = 0; i < numArray.length; i++) {
    // Start of subarray of common numbers if the element is equal to the next element.
    if(numArray[i] === numArray[i+1]) {
      tempArray.push(numArray[i]);
    }
    // The end of the subarray of common numbers if the element is equal to the element before it.
    // This also means the first if statement fails since the element is not equal to the next element.
    // tempArray is reset to start the next subarray search.
    else if(numArray[i] === numArray[i-1]) {
      tempArray.push(numArray[i]);
      resultArray.push(tempArray);
      tempArray = [];
    }
    // If no common numbers exists to create a subarray.
    else if(numArray[i] !== numArray[i+1]) {
      resultArray.push(numArray[i]);
    }
  }
  
  // So long as the string array is not empty, you can push to the full array.
  if(stringArray !== undefined) resultArray.push(stringArray);
  
  console.log(resultArray);
}

formatArray(inputArray1);
formatArray(inputArray2);