/* 99 bottles of beer */

let sing = function () {
    let theLyrics = [],
      n = 99;
      
    while (n > 2) {
      theLyrics.push(`${n} bottles of beer on the wall, ${n--} bottles of beer.`,
                 `Take one down and pass it around, ${n} bottles of beer on the wall.`)
    }
    theLyrics.push('2 bottles of beer on the wall, 2 bottles of beer.',
                'Take one down and pass it around, 1 bottle of beer on the wall.',
                '1 bottle of beer on the wall, 1 bottle of beer.',
                'Take one down and pass it around, no more bottles of beer on the wall.',
                'No more bottles of beer on the wall, no more bottles of beer.',
                'Go to the store and buy some more, 99 bottles of beer on the wall.')         
    return theLyrics
    };