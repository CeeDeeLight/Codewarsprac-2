//Create a function that accepts an array and a block (JS: function), and returns true if the 
//block (/function) returns true for any item in the array. If the array is empty, the function should return false.
function any(arr, fun){
    // your code here
  return arr.some(fun);
  }