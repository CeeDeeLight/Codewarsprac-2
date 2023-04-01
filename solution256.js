//write funct stringy that takes size and returns a string of alt "1s" and "0s"
//string should start with a 1. a string with size 6 should return 101010
//with size 4 should return 1010. The size will always be positive and use only whole nums.

function stringy(size) {
    let str= "";
    for ( let i=1; i<=size; i++)
      str+=i%2;
    return str;
  }