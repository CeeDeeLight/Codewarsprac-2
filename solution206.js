// Fix My Phone #'s Given a string, you must decide whether or not it contains a valid phone number. 
//If it does, return the corrected phone number as a string ie. '02078834982' with no whitespace or special characters, 
//else return "Not a phone number".
function isItANum(str) {
    str = str.replace(/[^0-9]/g, '');
    return /^0\d{10}$/.test(str) ? str : "Not a phone number";
  }