/* Anagram Detection. They are case sensitive, Complete the function to return true if 2 arguments 
given are anagrams of each other. Otherwise return false. i.e foefet is an anagram of toffee */
let isAnagram = function(test, original){
    return test.toLowerCase().split('').sort().join('') === original.toLowerCase().split('').sort().join('');
};