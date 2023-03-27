/*  Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. 
A tower block is represented with "*" character.* A tower with 6 floors looks like this [
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]                      */

function towerBuilder(nFloors) {
    let space, asterisk, tower = [];
    for (let i = 1; i <= nFloors; i++){
        space = ' '.repeat(nFloors - i);
        asterisk = '*'.repeat(2 * i - 1);
        tower.push(`${space}${asterisk}${space}`);
    }
    return tower;
}