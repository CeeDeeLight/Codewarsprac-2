/* Four Seven 
funciton should accetps inpust 4 and 7. If 4 entered, function should return 7 and vice versa.
Anything else entered as input should return 0. There is 1 catch, you cannot include if, switch or ternary operators */



function fourSeven(n) {
    while (n == 4) return 7;
    while (n === 7) return 4;
    return 0;
}  
