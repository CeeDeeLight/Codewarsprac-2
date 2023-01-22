/* Unifinished Loop - Bug Fixing Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his 
unfinished for loop:
function createArray(number){
  var newArray = [];  
  for(var counter = 1; counter <= number;){
    newArray.push(counter);
  }  
  return newArray;
}   */

function createArray(number){
    let newArray = [];    
    for(let counter = 1; counter <= number; counter++){  //you have to put the counter ++ 
      newArray.push(counter);
    }    
    return newArray;
  }