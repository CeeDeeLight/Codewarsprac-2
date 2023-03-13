/*write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day 
he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and 
in the past. 

Given: function calculateAge() {
}    */

function calculateAge(birthYear, currentYear) {
  
    const difference = currentYear - birthYear;
  
    if (birthYear === currentYear) return 'You were born this very year!'
    if (difference === 1) return 'You are 1 year old.'
    if (difference > 1) return `You are ${difference} years old.`
    if (difference === -1) return 'You will be born in 1 year.'
  
    return `You will be born in ${difference * -1} years.`
  }