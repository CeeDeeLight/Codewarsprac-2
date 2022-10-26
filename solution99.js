/* Return the number of unique arrays that can be formed by picking exactly one element from each subarray.
For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].
Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.
solve([[1,2],[4],[5,6]]),4)
solve([[1,2],[4,4],[5,6,6]]),4)
solve([[1,2],[3,4],[5,6]]),8)
solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72) 
*hint:You have an array full of arrays. Map through the parent array and 
make sure each sub array is a set aka no duplicate numbers. 
Once each sub array contains no duplicates you can just reduce multiplying the 
length of each sub array together to get the total combinations */

function solve (arr) {
    return arr.map (sA=>new Set(sA).size).reduce((a,c)=>a*c,1);
}
// Oneliner solve:
//const solve = arr => arr.reduce((a,c)=> a * new Set(c).size, 1)