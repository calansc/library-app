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
// const spellmonger = new Book("SpellMonger", "Terry Mancour", 624, "read");

function addBookToLibrary() {
  title = prompt("Book Title:");
  author = prompt("Book Author:");
  pages = prompt("Number of pages:");
  read = prompt("Have you read this book?");
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

// function to loop through myLibrary array and display each book.
// Either in a table or on a 'card'

// New book button to bring a form to add a new book.
// 'submit' tries to send data to a server.
// Review event.preventDefault(); documentation to solve this

// Add button on each book's display to remove from library

// Add button to change 'read' status
