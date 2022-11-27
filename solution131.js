/* Spot Waldo-Given crowd, an array of strings of equal length, representing a crowded place, 
return an array with two integers representing the coordinates [y, x] where Waldo can be found 
([0, 0] is top-left, y being the row and x being the column ). Practice */

function findWaldo(crowd) {
    let array = []
        waldo = ''
    for (let x = 0; x < crowd.length; x++) {
      for (let y = 0; y < crowd[x].length; y++) {
        array.push(crowd[x][y])
      }
    }
    array.sort()
    for (let x = 1; x < array.length - 1; x++) {
      if (array[x] != array[x -1] && array[x] != array[x + 1]) {
        waldo = array[x]
      }
    }
    for (let x = 0; x < crowd.length; x++) {
      for (let y = 0; y < crowd[x].length; y++) {
       if (crowd[x][y] == waldo) {
         return [x,y]
        }
     }
   }
  }