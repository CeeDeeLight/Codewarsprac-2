//Building upon the previous day's code practice
//define a addFavoriteBook function that receives a single param called 'bookName'
function addFavoriteBook (bookName) {
    //if the provided 'bookName' string does NOT have the word Great in it, add it to the favoriteBooks array.  
    if (!bookName.includes('Great')) {
        favoriteBooks.push(bookName);
    }
 }
 
 //define a printFavoriteBooks() function that receives no parameters
 function printFavoriteBooks() {
     console.log (`Favorite Books: ${favoriteBooks.length}` );
 
     // prinFavoriteBooks should loop thru favoriteBooks array and print out each value.
     for (let bookName of favoriteBooks) {
         console.log(bookName);
     }
 }
 
 let favoriteBooks = [];
 
 addFavoriteBook('A Song of Ice and Fire')
 addFavoriteBook('The Great Gatsby');
 addFavoriteBook('Crime & Punishment');
 addFavoriteBook('Great Expectations');
 addFavoriteBook('You Don"t Know JS');
 addFavoriteBook('Eloquent Javascript');
 
 printFavoriteBooks();