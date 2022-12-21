//FizzBuzz: For every num divisible by 3 = FIZZ, divis by 5 = BUZZ, divis by 3 & 5 FIZZBUZZ.
//FOR LOOP:
for (let i = 0; i < 101; i ++){
    if (i % 15 === 0) {
        console.log("FIZZBUZZ");
    }
    else if (i % 3 === 0) {
        console.log("FIZZ");
    }
    else if (i % 5 === 0) {
        console.log("BUZZ");
    }
    else {
        console.log(i);
    }
}