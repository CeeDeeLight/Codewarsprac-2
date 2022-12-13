/* Previous Multiple of three Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a 
number that is a multiple of three.Return n if the input is already a multiple of three, and if no such number exists, 
return null, a similar empty value, or -1.*/

const prevMultOfThree = n => {
  while (n % 3) {
    n = Math.floor (n / 10)
  }
  return n || null
}