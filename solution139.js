/*You are given an odd-length array of integers, in which all of them are the same, except for one single number.
Complete the method which accepts such an array, and returns that single different number.
The input array will always be valid! (odd-length >= 3) [1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/
    function stray(numbers) {
        let dsc = numbers.sort();
         if (dsc[0] != dsc[1]) {
          return dsc[0];
         }
          return dsc[dsc.length-1]
      }

//fyi I used my initials dsc for fun. It could be any letter. Most people would use a or b or x or y