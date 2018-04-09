//get the variables from the html input
var title = document.getElementById('title');
var author = document.getElementById('author');
var summary = document.getElementById('summary');

//test variables
/*let title = 'A Coding Affair';
let author = 'Mandy Mericle';
let summary = 'Trying to make this code work';*/

//create an empty library
let library = [];

function save (title, author, summary) {
    debugger;

    //create an empty book entry
    let bookEntry ={};

    //check for summary and create bookEntry object 
    if (summary) {
        bookEntry = {
            bookTitle: title,
            bookAuthor: author,
            bookSummary: summary
        }
    } else {
        bookEntry = {
            bookTitle: title,
            bookAuthor: author
        }
    }
    
    //add bookEntry to library
    library.push(bookEntry);
    
    //add library to html document to check
    document.getElementById("demo").innerHTML = library;
}