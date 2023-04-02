//Write a function that calculates the average of the numbers in a given list.

function find_average(arr) {
    let sum = arr.reduce((a,b) => a + b, 0);
    let avg = (sum / arr.length) || 0;// your code here
    return avg;
  }