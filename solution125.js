/* Learn how to build js generator functions which gets called with an array. You will be passed an array with numbers. It will never 
be empty */
function* nextElementGenerator(array){
    while (true) yield* array;
}