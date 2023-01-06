/* Your function takes as parameter the number of times the cube has been cut. You must return the number of smaller cubes created by the cuts that have at 
least one red face. Examples:
countSquares(2) --> 26
countSquares(4) --> 98  */

let countSquares = cuts => cuts == 0 ? 1 : cuts == 1 ? 8 : (cuts + 1) ** 3 - (cuts - 1) ** 3