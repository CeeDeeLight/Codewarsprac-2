/* Four Seven Done Another way.
funciton should accetps inpust 4 and 7. If 4 entered, function should return 7 and vice versa.
Anything else entered as input should return 0. There is 1 catch, you cannot include if, switch or ternary operators */

function fourSeven(n) {
    let results = {
        7 : 4,
        4 : 7,
    }
return results[n] || 0
} 