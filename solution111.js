/* I would like to be able to pass an array with two elements to my swapValues function to swap the values. 
However it appears that the values aren't changing.Can you figure out what's wrong here? */
/*debug the code-
function swapValues() {
    var args = Array.prototype.slice.call(arguments);
    var temp = args[0];
    args[0] = args[1];
    args[1] = temp;
}*/

function swapValues(args) {
    let temp = args[0];
     args[0] = args[1];
     args[1] = temp;
 }