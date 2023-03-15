/*Keep The Order
write a function (keepOrder in JS which takes a sorted array (array) and a value (value), and returns the lowest index where you could insert val to 
maintain the sorted-ness of the array. The input array will always be sorted in ascending order. It may contain duplicates. */

function keepOrder(array, value){
    //your code here
    for (i = 0; i < array.length; i++) {
       if (value <= array[i]) {
           break
       }
    }
    return i;
}   