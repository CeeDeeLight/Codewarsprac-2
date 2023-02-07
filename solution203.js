/* Reduce but Grow
given a non-empty arrow of integers, return the result of multiplying the values together in order
use the reduce method. [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24 */

function grow(x){
    return x.reduce((previousValue, currentValue) => previousValue * currentValue);
   }