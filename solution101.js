/* 6kyu The goal of this exercise is to convert a string to a new string where each character in 
the new string is "(" if that character appears only once in the original string, or ")" if 
that character appears more than once in the original string. Ignore capitalization when 
determining if a character is a duplicate.
Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("  
hint: map through array checking if indexof == lastindexof and return the appropriate character */

function encodeDupes(str){
    return str.toLowerCase()
              .split('')
              .map( (l,i,a) => a.indexOf(l) === a.lastIndexOf(l) ? '(' : ')')
              .join('')
}
//As a note, this is not efficient because it's Quadratic.
