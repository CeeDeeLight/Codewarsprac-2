/*We have implemented a function wrap(value) that takes a value of arbitrary type and wraps it in a new JavaScript Object
setting the 'value' key on the new Object to the passed-in value.*/

function wrap(value) {
    return {  
     "value":value
    }
}