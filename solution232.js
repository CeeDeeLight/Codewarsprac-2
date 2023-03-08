/*  Not all integers can be represented by JavaScript. It has space to represent 53bit signed integers. 
In this Kata, we've to determine if it is safe to use the integer or not. Make use of the latest ES6 features to find this.
SafeInteger(9007199254740990) //true
SafeInteger(-90) //true
SafeInteger(9007199254740992) //false */
//Given:
//    function SafeInteger (n) {
//   }  

const SafeInteger = n => Number.isSafeInteger(n)