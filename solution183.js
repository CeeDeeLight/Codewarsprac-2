/* The Coins of Ter In other words:adjust takes two integers, b and n, and returns the smallest number k, such 
that n <= k and k % b == 0  
https://www.codewars.com/kata/55d38b959f9c33f3fb00007d */

//You are given:
//function adjust(coin,price) {
  //return 0; // fix me
//}

/* The Most basic solve is a while loop:
function adjust (coin, price) {
    while (price % coin) {
        price ++
    }
    return price;
}  */

//This uses a math obj.
const adjust = (coin, price) => Math.ceil (price/coin) * coin;