/*Find the maximal product 
Given a non-empty array of integers, find the maximum product of elements from all available sequences.
A sequence here is any pattern in which the elements are equally spaced apart in the array.
The sequence should start at its place in the array: for example, the sequence of 3 elements apart should start at the third element.
*/

function findMaxProduct(arr){
    return Math.max(...arr.map((_, c) => arr.filter((_, d) => (d+1) % (c + 1) ===0).reduce((e,f) => e * f, 1)));
  }