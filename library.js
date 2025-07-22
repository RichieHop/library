// Create library array
let myLibrary = [];
let list = document.getElementById("bookList");

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, true, "images/The-Hobbit.jpg");
addBookToLibrary('The Fellowship Of The Ring', 'J.R.R. Tolkien', 423, true, "images/The Fellowship Of The Ring.jpeg");
addBookToLibrary('The Two Towers', 'J.R.R. Tolkien', 352, true, "images/The Two Towers.jpeg");
addBookToLibrary('The Return Of The King', 'J.R.R. Tolkien', 416, true, "images/The Return Of The King.jpeg");
addBookToLibrary('Lord Of The Flies', 'William Golding', 224, false, "images/Lord Of The Flies.jpg");
addBookToLibrary('Dissonance: A LitRPG Adventure (Unbound Book 1)', 'Nicoli Gonnella', 778, true, "images/No Image Available.jpeg");
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

console.log(myLibrary[6].author);

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
    // for (a = 0; a < 15; a++) {
        for (var i = 0; i < myLibrary.length; i++) {
            let li = document.createElement("li")
            let index = i
            let readText = ""
            li.innerHTML = myLibrary[i].title
            li.className = "bookListItems"
            li.addEventListener("click", () => {
                var authorName = document.getElementById("selectedBookDetails").rows[parseInt(0,10)].cells
                var numPages = document.getElementById("selectedBookDetails").rows[parseInt(1,10)].cells
                var readYet = document.getElementById("selectedBookDetails").rows[parseInt(2,10)].cells                              
                authorName[parseInt(1,10)].innerHTML = myLibrary[index].author;
                numPages[parseInt(1,10)].innerHTML = myLibrary[index].pages;
                if (myLibrary[index].readOrNot === true) {
                    readText = "Yes"
                } else {
                    readText = "No"
                }
                readYet[parseInt(1,10)].innerHTML = readText;
                const image = document.getElementById("bookPicture");
                image.src = myLibrary[index].imageURL;
                // Set all backgrounds to transparent.
                var lists = document.querySelectorAll("li");
                lists.forEach((li) => li.style.backgroundColor = "transparent");
                lists.forEach((li) => li.style.color = "black");
                // Set selected background to grey.
                li.style.backgroundColor = "grey";
                li.style.color = "white";
            })
            list.appendChild(li);
        }
    // }
}

// Remove a book from the library
function deleteBookFromLibrary() {
    // take params, remove a book from the array
}

function markBookAsReadOrUnread() {
    //toggle the read status
}

displayBooks();

