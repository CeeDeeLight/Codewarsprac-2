//FizzBuzz: For every num divisible by 3 = FIZZ, divis by 5 = BUZZ, divis by 3 & 5 FIZZBUZZ.
//DO WHILE LOOP:
let i = 1;

do {
    if (i % 15 === 0) { 
        console.log ("FIZZBUZZ");
    }
    else if (i % 3 === 0) {
        console.log ("FIZZ")
    }
    else if (i % 5 === 0) {
        console.log ("BUZZ");
    }
    else {
        console.log(i);
    }
    i++;
}
while (i < 101);