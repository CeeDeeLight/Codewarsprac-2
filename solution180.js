/* Seven Wonders https://www.codewars.com/kata/5adadcb36edb07df5600092e */
function solve(compasses, gears, tablets) {
    return Math.min (compasses, gears, tablets) * 7 + compasses * compasses + gears * gears + tablets * tablets;
}