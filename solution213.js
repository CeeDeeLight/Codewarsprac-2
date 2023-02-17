/* Write a function that returns a string in which first name is swapped with last name.
nameShuffler('john McClane'); => "McClane john"*/

function nameShuffler(str){
    return str.split(' ').reverse().join(' ');
}