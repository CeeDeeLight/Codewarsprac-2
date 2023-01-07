/*  Write a function consonantCount, consonant_count or ConsonantCount that takes a string of English-language text 
and returns the number of consonants in the string.Consonants are all letters used to write English excluding the vowels a, e, i, o, u.*/

function consonantCount(str) {
    let result = '';
        array = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z',
                'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z']
    for (let i = 0; i < str.length; i++){
        for (let j = 0; j < array.length; j++){
            if (str[i] == array[j]) {
                result += str[i]
            }
        }
    }
    return result.length
  }