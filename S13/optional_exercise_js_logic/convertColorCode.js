/*
  Write a function that converts HEX to RGB.
  Then Make that function auto-dect the formats so that if you enter HEX color format
  it returns RGB and if you enter RGB color format it returns HEX.
*/

const hex1 = "FF", hex2 = "00", hex3 = "00";
const num1 = 128, num2 = 0, num3 = 0;

const checkString = (col1, col2, col3) => {
  if((typeof col1 === "string") && (typeof col2 === "string") && (typeof col3 === "string")) return true;
  return false;
}

const checkNum = (col1, col2, col3) => {
  if((typeof col1 === "number") && (typeof col2 === "number") && (typeof col3 === "number")) return true;
  return false;
}

const convertColorCode = (col1, col2, col3) => {
  if(checkString(col1, col2, col3)) {
    console.log(parseInt(col1, 16), parseInt(col2, 16), parseInt(col3, 16));
  }
  else if(checkNum(col1, col2, col3)) {
    console.log(col1.toString(16), col2.toString(16), col3.toString(16));
  }
  else console.log("Invalid color codes");
}

convertColorCode(hex1, hex2, hex3);
convertColorCode(num1, num2, num3);