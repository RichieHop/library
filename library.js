// Create library array
let myLibrary = [];
let list = document.getElementById("bookList");

// Constructor for Book object
function Book(title, author, pages, readOrNot, imageURL) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readOrNot = readOrNot
    this.id = crypto.randomUUID()
    this.imageURL = imageURL;
}

// Add a new book to the library
function addBookToLibrary(title, author, pages, read, imageURL) {
    let book = new Book(title, author, pages, read, imageURL);
    myLibrary.push(book);
}

function displayBooks() {
    for (a = 0; a < 15; a++) {
        for (var i = 0; i < myLibrary.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = myLibrary[i].title;
        list.appendChild(li);
        }
    }
}

// Remove a book from the library
function deleteBookFromLibrary() {
    // take params, remove a book from the array
}

function markBookAsReadOrUnread() {
    //toggle the read status
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, true, "images/The Hobbit.jpg");
addBookToLibrary('The Fellowship Of The Ring', 'J.R.R. Tolkien', 423, true, "images/The Fellowship Of The Ring.jpeg");
addBookToLibrary('The Two Towers', 'J.R.R. Tolkien', 352, true, "images/The Two Towers.jpeg");
addBookToLibrary('The Return Of The King', 'J.R.R. Tolkien', 416, true, "images/The Return Of The King.jpeg");
addBookToLibrary('Lord Of The Flies', 'William Golding', 224, false, "images/Lord Of The Flies.jpg");
addBookToLibrary('My Grandmother Asked Me to Tell You She\’s Sorry ', 'Fredrik Backman', 400, false, "images/No Image Available.jpeg");

displayBooks();