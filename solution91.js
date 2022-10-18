//Create function that accepts 2 arguments and returns an integer of the count of occurances the 2nd argument is found in the 1st one.
//if no occurances found, a count of 0 should be returned. 
function strCount(str, letter){  
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i] == letter) {
           count++ 
        }
    }
    return count;
  }