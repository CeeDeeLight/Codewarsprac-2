/* 21 Sticks https://www.codewars.com/kata/5866a58b9cbc02c4f8000cac   */
function makeMove(sticks) {
    if(sticks % 4 == 0) {
      return Math.random() * 3 + 1;
    }
    return sticks % 4;
  }