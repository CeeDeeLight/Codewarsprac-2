/* Implement the function which takes an array containing the names of people that like an item. It must return the display 
text as shown in the examples:
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.   */

const likes = (names, length = names.length) =>
    length < 1 ? 'no one likes this' :
    length < 2 ? `${names[0]} likes this` :
    length < 3 ? `${names[0]} and ${names[1]} like this` :
    length < 4 ? `${names[0]}, ${names[1]} and ${names[2]} like this` :
                 `${names[0]}, ${names[1]} and ${length - 2} others like this`