/* Given an array of digital numbers, return a new array of length number containing the last even numbers 
from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.
For example:
([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6] 
Filter the even numbers and slice the end using the -n syntax
P - taking in  array of nums. Num will always be some value.
never empty, at least num in the array
[2,4], 2    
Will there by any letters?
Will there be floated values?
Will there be any negative numbers? */
function evenNumbers(array, number){
    return array.filter (n => n %2 === 0).slice(-number);
}
//This is the one liner:
// const evenNumbers = (array, number) => array.filter(n => n % 2 === 0).slice(-number)


