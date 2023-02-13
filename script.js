let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages}, ${read}`;
  };
}
const theHobbit = new Book("The Hobbit", "JRR Tolken", 295, "not read");
const redRising = new Book("Red Rising", "Pierce Brown", 382, "read");
myLibrary.push(theHobbit);
myLibrary.push(redRising);
// const spellmonger = new Book("SpellMonger", "Terry Mancour", 624, "read");

function addBookToLibrary() {
  title = prompt("Book Title:");
  author = prompt("Book Author:");
  pages = parseInt(prompt("Number of pages:"));
  read = prompt("Have you read this book?");
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function bookReport() {
  for (const book of myLibrary) {
    console.log(book);
  }
}

const bookLibrary = document.querySelector(".bookLibrary");
const bookTile = document.querySelector(".bookTile");

function libraryCreation() {
  myLibrary.forEach((book) => {
    // console.log(book);
    let div = document.createElement("div");
    bookLibrary.appendChild(div);
    div.classList.add("bookTile");
    div.setAttribute("style", "border:red solid 1px");

    let divTitle = document.createElement("div");
    bookLibrary.lastChild.appendChild(divTitle);
    divTitle.classList.add("bookTitle");
    divTitle.textContent = book.title;

    let divAuthor = document.createElement("div");
    bookLibrary.lastChild.appendChild(divAuthor);
    divAuthor.classList.add("bookAuthor");
    divAuthor.textContent = book.author;

    let divPages = document.createElement("div");
    bookLibrary.lastChild.appendChild(divPages);
    divPages.classList.add("bookPages");
    divPages.textContent = book.pages;

    let divRead = document.createElement("div");
    bookLibrary.lastChild.appendChild(divRead);
    divRead.classList.add("bookRead");
    divRead.textContent = book.read;

    let removeButton = document.createElement("button");
    bookLibrary.lastChild.appendChild(removeButton);
    removeButton.classList.add("removeButton");
    removeButton.textContent = "Remove Book";
  });
}

function libraryReset() {
  while (bookLibrary.firstChild) {
    bookLibrary.removeChild(bookLibrary.firstChild);
  }
}

const addBookButton = document.querySelector(".addBookButton");
addBookButton.addEventListener("click", addBookToLibrary, false);

libraryCreation();

// use forEach ?
// https://stackoverflow.com/questions/3010840/loop-through-an-array-in-javascript

// function to loop through myLibrary array and display each book.
// Either in a table or on a 'card'

// New book button to bring a form to add a new book.
// 'submit' tries to send data to a server.
// Review event.preventDefault(); documentation to solve this
// Popup box
// https://www.w3docs.com/snippets/javascript/how-to-create-a-popup-form-using-javascript.html

// Add button on each book's display to remove from library

// Add button to change 'read' status
