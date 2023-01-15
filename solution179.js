/* Adding values of arrays in a shifted way. write a method, that gets two parameter:
1. An array of arrays with int-numbers
2. The shifting value
#The method should add the values of the arrays to one new array.
The arrays in the array will all have the same size and this size will always be greater than 0.
The shifting value is always a value from 0 up to the size of the arrays.
There are always arrays in the array, so you do not need to check for null or empty.
#1. Example:
[[1,2,3,4,5,6], [7,7,7,7,7,-7]], 0
1,2,3,4,5,6
7,7,7,7,7,-7
--> [8,9,10,11,12,-1] */

function addingShifted (arrayOfArrays, shift) {
    let result = new Array(arrayOfArrays[0].length + (arrayOfArrays.length -1) * shift).fill(0)
    for (let i = 0; i < arrayOfArrays.length; i ++) {
        for (let j = 0; j < arrayOfArrays[i].length; j ++){
            result[j + i * shift] += arrayOfArrays[i][j];
        }
    }
        return result;
}
    