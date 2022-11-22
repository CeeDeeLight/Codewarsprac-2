/* This is not a codewars problem. This is just me doing a javascript exercise.
Define an addFavoriteBook(..) function that receives a
single parameter, called bookName
If the provided bookName string does NOT have the word "Great" in it, add it to the favoriteBooks array. */

function addFavoriteBook (bookName) {
    if (!bookName.includes('Great')) {
        favoriteBooks.push(bookName);
    }
 }
 
 let favoriteBooks = [];
 
 addFavoriteBook('A Song of Ice and Fire')
 addFavoriteBook('The Great Gatsby');
 addFavoriteBook('Crime & Punishment');
 addFavoriteBook('Great Expectations');
 addFavoriteBook('You Don"t Know JS');
 addFavoriteBook('Eloquent Javascript');
 
 console.log(favoriteBooks);