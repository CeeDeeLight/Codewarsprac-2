/* makeBackronym https://www.codewars.com/kata/55805ab490c73741b7000064  */
//preload variable: dict
let makeBackronym = function(str) { 
    return str.split('').map(function(c){return dict[c.toUpperCase()];}).join(' ');
  };