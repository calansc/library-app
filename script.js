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

function bookReport() {
  for (const book of myLibrary) {
    console.log(book);
  }
}

const bookLibrary = document.querySelector(".bookLibrary");
const bookTile = document.querySelector(".bookTile");

function removeBook() {
  // console.log(this.id);
  let cardId = Array.from(this.parentNode.parentNode.children).indexOf(
    this.parentNode
  );
  // console.log(cardId);
  let delFromLibrary = myLibrary.splice(cardId, 1);
  this.parentNode.remove();
}

function readSwitch() {
  if (this.textContent === "read") {
    this.textContent = "not read";
  } else {
    this.textContent = "read";
  }
}

function cardCreation(book) {
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

  let divRead = document.createElement("button");
  bookLibrary.lastChild.appendChild(divRead);
  divRead.classList.add("bookRead");
  divRead.textContent = book.read;

  let removeButton = document.createElement("button");
  bookLibrary.lastChild.appendChild(removeButton);
  removeButton.classList.add("removeButton");
  removeButton.textContent = "Remove Book";

  let removeBookButton = document.querySelectorAll(".removeButton");
  for (let i = 0; i < removeBookButton.length; i++) {
    removeBookButton[i].addEventListener("click", removeBook, false);
  }

  let readButton = document.querySelectorAll(".removeButton");
  for (let i = 0; i < readButton.length; i++) {
    readButton[i].addEventListener("click", readSwitch, false);
  }
}

function libraryCreation() {
  myLibrary.forEach((book) => {
    cardCreation(book);
  });
}

function addBookToLibrary(title, author, pages, read) {
  // title = prompt("Book Title:");
  // author = prompt("Book Author:");
  // pages = parseInt(prompt("Number of pages:"));
  // read = prompt("Have you read this book?");
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  cardCreation(newBook);
}
function openAddBook() {
  document.querySelector(".addBookForm").style.display = "block";
  let title = document.getElementById("bookName");
  let author = document.getElementById("bookAuthor");
  let pages = document.getElementById("bookPages");
  let read = document.getElementById("read");
  if (
    title.value !== "" ||
    author.value !== "" ||
    pages.value !== "" ||
    read.value !== ""
  ) {
    title.value = "";
    author.value = "";
    pages.value = "";
    read.value = "";
  }
}

function closeForm() {
  let title = document.getElementById("bookName").value;
  let author = document.getElementById("bookAuthor").value;
  let pages = document.getElementById("bookPages").value;
  let read = document.getElementById("read").value;
  console.log(title, author, pages, read);
  addBookToLibrary(title, author, pages, read);
  document.querySelector(".addBookForm").style.display = "none";
}

function libraryReset() {
  while (bookLibrary.firstChild) {
    bookLibrary.removeChild(bookLibrary.firstChild);
  }
}

const addBookButton = document.querySelector(".addBookButton");
addBookButton.addEventListener("click", openAddBook, false);

const closeFormButton = document.querySelector(".closeForm");
closeFormButton.addEventListener("click", closeForm, false);

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
// To facilitate this you will want to create the function that
// toggles a book’s read status on your Book prototype instance.
