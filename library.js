// Initialise
let myLibrary = [];
const list = document.getElementById("bookList");
let currentIndex = 0;
let totalBooks = 0;
let readText = "";

// Book info buttons
const deleteButton = document.getElementById("delete");
const addButton = document.getElementById("add");
const toggleReadButton = document.getElementById("toggleRead");

// Keep a count of books in the library
const booksCount = document.getElementById("booksCount");

// Book info table cells
const bookTitle = document.getElementById("selectedBookDetails").rows[parseInt(0,10)].cells;
const authorName = document.getElementById("selectedBookDetails").rows[parseInt(1,10)].cells;
const numPages = document.getElementById("selectedBookDetails").rows[parseInt(2,10)].cells;
const readYet = document.getElementById("selectedBookDetails").rows[parseInt(3,10)].cells;
const readCell= document.getElementById("readCell");

// Add a book modal form constants
const showBtn = document.getElementById("add");
const addNewBook = document.getElementById("addNewBook");
const jsCloseBtn = addNewBook.querySelector("#js-close");
const normalCloseBtn = addNewBook.querySelector("#normal-close");

// Edit a book modal form constants
const showEditBtn = document.getElementById("edit");
const editThisBook = document.getElementById("editThisBook");
const jsCloseEditBtn = editThisBook.querySelector("#js-close-edit");
const normalCloseEditBtn = editThisBook.querySelector("#normal-close-edit");

// Constants for form data used when adding or editing a book
const titleValue = document.getElementById("title");
const authorValue = document.getElementById("author");
const pagesValue = document.getElementById("pages");
const readOrNotValue = addNewBook.querySelector("select");
const imageURLValue = document.getElementById("imageURL");

// Initialise myLibrary with some sample books
addBookToLibrary('The Colour Of Magic', 'Terry Pratchett', 288, true, "images/The Colour of Magic.jpg");
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, true, "images/The-Hobbit.jpg");
addBookToLibrary('The Fellowship Of The Ring', 'J.R.R. Tolkien', 423, true, "images/The Fellowship Of The Ring.jpeg");
addBookToLibrary('The Two Towers', 'J.R.R. Tolkien', 352, true, "images/The Two Towers.jpeg");
addBookToLibrary('The Return Of The King', 'J.R.R. Tolkien', 416, true, "images/The Return Of The King.jpeg");
addBookToLibrary('Lord Of The Flies', 'William Golding', 224, false, "images/Lord Of The Flies.jpg");
addBookToLibrary('Dissonance: A LitRPG Adventure (Unbound Book 1)', 'Nicoli Gonnella', 778, true, "images/Dissonance.jpg");
addBookToLibrary('Silence: A LitRPG Adventure (Unbound Book 2)', 'Nicoli Gonnella', 482, true, "images/Silence.jpg");
addBookToLibrary('Hunger: A LitRPG Adventure (Unbound Book 3)', 'Nicoli Gonnella', 1035, true, "images/Hunger.jpg");
addBookToLibrary('Fury: A LitRPG Adventure (Unbound Book 4)', 'Nicoli Gonnella', 764, true, "images/Fury.jpg");
addBookToLibrary('Threshold: A LitRPG Adventure (Unbound Book 5)', 'Nicoli Gonnella', 754, true, "images/Threshold.jpg");
addBookToLibrary('Expanse: A LitRPG Adventure (Unbound Book 6)', 'Nicoli Gonnella', 1128, true, "images/Expanse.jpg");
addBookToLibrary('Abyss: A LitRPG Adventure (Unbound Book 7)', 'Nicoli Gonnella', 774, true, "images/Abyss.jpg");
addBookToLibrary('Vault: A LitRPG Adventure (Unbound Book 8)', 'Nicoli Gonnella', 768, true, "images/Vault.jpg");
addBookToLibrary('Crown: A LitRPG Adventure (Unbound Book 9)', 'Nicoli Gonnella', 949, true, "images/Crown.jpg");
addBookToLibrary('Empire: A LitRPG Adventure (Unbound Book 10)', 'Nicoli Gonnella', 752, true, "images/Empire.jpg");
addBookToLibrary('Chains: A LitRPG Adventure (Unbound Book 11)', 'Nicoli Gonnella', 762, true, "images/Chains.jpg");

// **************************************************************************************************************************

// const libraryJSON = JSON.stringify(myLibrary);
// console.log(libraryJSON);

// const fs = require("fs");

// // writing the JSON string content to a file
// fs.writeFile("library.json", libraryJSON, (error) => {
//   // throwing the error
//   // in case of a writing problem
//   if (error) {
//     // logging the error
//     console.error(error);
//     throw error;
//   }
//   console.log("library.json written correctly");
// });

// **************************************************************************************************************************

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

// Show the book information
function displayBookDetail(index) {
    currentIndex = index;
    bookTitle[parseInt(0,10)].innerHTML = myLibrary[index].title;
    authorName[parseInt(1,10)].innerHTML = myLibrary[index].author;
    numPages[parseInt(1,10)].innerHTML = myLibrary[index].pages;
    if (myLibrary[index].readOrNot === true) {
        readText = "Yes"
        readCell.style.color = "black";
    } else {
        readText = "No";
        readCell.style.color = "red";
    }
    readYet[parseInt(1,10)].innerHTML = readText;
    const image = document.getElementById("bookPicture");
    image.src = myLibrary[index].imageURL;                
}

// Build the ul items for each book in myLibrary, and add event listener to highlight and select book info' if clicked
function displayBooks() {
    totalBooks = 0;
    for (var i = 0; i < myLibrary.length; i++) {
        let li = document.createElement("li")
        let index = i
        li.innerHTML = myLibrary[i].title
        li.className = "bookListItems"
        // Display the image and details of the first book in the list
        if (i === 0) {
            displayBookDetail(index)
            li.style.backgroundColor = "grey";
            li.style.color = "white";
        }
        li.addEventListener("click", () => {
            displayBookDetail(index)
            let lists = document.querySelectorAll("li");
            lists.forEach((li) => li.style.backgroundColor = "transparent");
            lists.forEach((li) => li.style.color = "black");
            // Set selected background to grey.
            li.style.backgroundColor = "grey";
            li.style.color = "white";
        })
        list.appendChild(li);
        totalBooks = ++totalBooks;
    }
}

// Rebuild the list of books and update the book count after adding or deleting a book
function redisplayBooks() {
    const ul = document.getElementById("bookList");
    while(ul.firstChild) ul.removeChild(ul.firstChild);
    displayBooks();
    booksCount.innerHTML = "Total books: " + totalBooks;
}

// Toggle the read status
toggleReadButton.addEventListener("click", () => {
    myLibrary[currentIndex].readOrNot = !myLibrary[currentIndex].readOrNot;
    if (myLibrary[currentIndex].readOrNot === true) {
        readText = "Yes"
        readCell.style.color = "black";
    } else {
        readText = "No";
        readCell.style.color = "red";
    }
    readYet[parseInt(1,10)].innerHTML = readText;    
})    

// Remove a book from the library
deleteButton.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete this book?")) {
        myLibrary.splice(currentIndex, 1);
        redisplayBooks();
    } 
})

// Show the modal add book form
showBtn.addEventListener("click", () => {
    // Clear previous data from form
    document.getElementById("addBook").reset();
    addNewBook.showModal();
});

// Close the modal add book form and add a book
normalCloseBtn.addEventListener("click", (e) => {
    // Check if book title and author alrady exist
    let result = myLibrary.filter(function(v, i) {
        return ((v["title"] === titleValue.value) && v.author === authorValue.value);
    })
    if (result.length > 0) {
        alert("This book and author already exist in your library");
        e.preventDefault();
        return false;
    };
    if (titleValue.value === "" || authorValue.value === "") {
        alert("You have to enter a book and author");
        e.preventDefault();
        return false;
    };    
    // Set imageURL to "No Image Available.jpeg" if it's blank
    if (imageURLValue.value === "") {
        imageURLValue.value = "images/No Image Available.png";
    }
    // Set readOrNotValue to boolean
    if (readOrNotValue.value === "True") {
        var readOrNot = true;
    } else {
        readOrNot = false;
    }
    addBookToLibrary(titleValue.value, authorValue.value, pagesValue.value, readOrNot, imageURLValue.value);
    redisplayBooks();
    addNewBook.close();
});

// Close and cancel the modal add book form
jsCloseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addNewBook.close();
});

// Show the modal edit book form
showEditBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("titleEdit").value = myLibrary[currentIndex].title;
    document.getElementById("authorEdit").value = myLibrary[currentIndex].author;
    document.getElementById("pagesEdit").value = myLibrary[currentIndex].pages;
    document.getElementById("imageURLEdit").value = myLibrary[currentIndex].imageURL;
    titleValue.value = myLibrary[currentIndex].title;
    authorValue.value = myLibrary[currentIndex].author;
    pagesValue.value = myLibrary[currentIndex].pages;
    imageURLValue.value = myLibrary[currentIndex].imageURL;
    editThisBook.showModal();
});

// Close the modal edit book form
normalCloseEditBtn.addEventListener("click", (e) => {
    if (document.getElementById("titleEdit").value === "" || document.getElementById("authorEdit").value === "") {
        alert("You have to enter a book and author");
        e.preventDefault();
        return false;
    };      
    // Set imageURL to "No Image Available.jpeg" if it's blank
    if (imageURLValue.value === "") {
        imageURLValue.value = "images/No Image Available.png";
    }
    myLibrary[currentIndex].title = document.getElementById("titleEdit").value;
    myLibrary[currentIndex].author = document.getElementById("authorEdit").value;
    myLibrary[currentIndex].pages = document.getElementById("pagesEdit").value;
    myLibrary[currentIndex].imageURL = document.getElementById("imageURLEdit").value;
    redisplayBooks();
    editThisBook.close();
});

// Close and cancel the modal edit book form
jsCloseEditBtn.addEventListener("click", (e) => {
    e.preventDefault();
    editThisBook.close();
});

displayBooks();
booksCount.innerHTML = "Total books: " + totalBooks;

