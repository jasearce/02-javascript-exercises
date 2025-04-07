const getTheTitles = function(books) {
    /*
    //Version 1
    let booksTitle = [];
    for (let i = 0; i < books.length; i++) {
        booksTitle.push(books[i].title);
    }
    return booksTitle;

    */
   
    //Version 2
    return books.map(book => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
