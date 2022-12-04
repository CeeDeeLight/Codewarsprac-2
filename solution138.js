/* To complete this kata you will have to finish a function that returns a string of characters which when printed resemble a Rubik's cube. The function is named cube, and it has one integer parameter 
(formal argument) n, for the dimensions of the cube. 
For example, when I call the function cube(3) it will return a string which when printed appears as so:
  /\_\_\_\
 /\/\_\_\_\
/\/\/\_\_\_\
\/\/\/_/_/_/
 \/\/_/_/_/
  \/_/_/_/   */

  function cube(n) {
    let rubik = [];
    for (let i = 1; i <= n; i++) rubik.push(' '.repeat(n-i) + '/\\'.repeat(i) + '_\\'.repeat(n));
    for (let i = n; i >= 1; i--) rubik.push(' '.repeat(n-i) + '\\/'.repeat(i) + '_/'.repeat(n));
    return rubik.join('\n');
  }