/* Did She Say Hallo? Write a simple function to check if the string contains the word hallo 
in different languages. Use Regex*/

function validateHello(greetings) {
    res =  /(hello|ciao|salut|hallo|hola|ahoj|czesc)/i.test(greetings) 
    return res
  }
