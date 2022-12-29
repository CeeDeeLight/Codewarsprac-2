//Write a function that calculates the average of the numbers in a given list.
//Given By Codewars:

function find_average(array) {
    let sum = array.reduce((a,b) => a + b, 0);
    let avg = (sum / array.length) || 0;// your code here
    return avg;
  }