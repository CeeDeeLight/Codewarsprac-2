/* Digital Chessboard
Your task is to write a function that takes two integers rows and columns and returns a chessboard pattern as a two dimensional array.
So chessBoard(6,4) should return an array like this:
[
    ["O","X","O","X"],
    ["X","O","X","O"],
    ["O","X","O","X"],
    ["X","O","X","O"],
    ["O","X","O","X"],
    ["X","O","X","O"]
]
And chessBoard(3,7) should return this:
[
    ["O","X","O","X","O","X","O"],
    ["X","O","X","O","X","O","X"],
    ["O","X","O","X","O","X","O"]
]
The white spaces should be represented by an: 'O'
and the black an: 'X'
The first row should always start with a white space 'O' */

const chessBoard = (rows, columns) =>
  [...Array(rows)].map((_,idx) => [...Array(columns)].map((_, i) => `OX`[idx + i & 1]));