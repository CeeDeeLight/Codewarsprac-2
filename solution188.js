/* Simple Multiplicaton. multiplying a given number by eight if it is an even number and by nine otherwise. */

function simpleMultiplication(number) {
    if (number % 2) {
        return number * 9;
    }else{
        return number * 8;
    }
}

//conditional ternary operation below:
// const simpleMultiplication = number => number % 2 ? number * 9 : number * 8;
      