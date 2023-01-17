/* Give a shout to your friend walking towards you.  Write the function madShout that takes a string input sidewalk to 
calculate the shout string and return it.The shout phrase is "Oi F!" but depending on the distance between your friend, 
the word expands https://www.codewars.com/kata/63a2928176157931b3945090/train/javascript */

function madShout(sidewalk){
    return 'Oi' + 'i' .repeat((sidewalk.indexOf('F') - sidewalk.indexOf('Y') - 1) / 2) + ' F!';
  }