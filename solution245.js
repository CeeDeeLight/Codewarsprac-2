/* Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, 
in other case return Let's fight again!. 
https://www.codewars.com/kata/59377c53e66267c8f6000027/javascript */

function alphabetWar(fight) {
    let score = 0;
    for (const letter of fight) {
        switch (letter) {
            case 'w': score -= 4; break;
            case 'p': score -= 3; break;
            case 'b': score -= 2; break;
            case 's': score -= 1; break;
            case 'm': score += 4; break;
            case 'q': score += 3; break;
            case 'd': score += 2; break;
            case 'z': score += 1; break;
        }
    }
    return score < 0 ? "Left side wins!" : score > 0 ? "Right side wins!" : "Let's fight again!";
}