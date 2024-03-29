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
const spellmonger = new Book("SpellMonger", "Terry Mancour", 624, "read");
myLibrary.push(spellmonger);

const bookLibrary = document.querySelector(".bookLibrary");
const bookTile = document.querySelector(".bookTile");

function removeBook() {
  let cardId = Array.from(
    this.parentNode.parentNode.parentNode.parentNode.children
  ).indexOf(this.parentNode.parentNode.parentNode);
  let delFromLibrary = myLibrary.splice(cardId, 1);
  this.parentNode.parentNode.parentNode.remove();
}

function readSwitch() {
  if (this.src.endsWith("bookread.svg")) {
    this.src = "bookunread.svg";
  } else {
    this.src = "bookread.svg";
  }
}

function cardCreation(book) {
  let div = document.createElement("div");
  bookLibrary.appendChild(div);
  div.classList.add("bookTile");

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
  divPages.textContent = `${book.pages} pages`;

  let buttons = document.createElement("div");
  bookLibrary.lastChild.appendChild(buttons);
  buttons.classList.add("buttonContainer");

  let divRead = document.createElement("div");
  buttons.appendChild(divRead);
  divRead.classList.add("buttons");
  // divRead.textContent = book.read;

  let readImg = document.createElement("img");
  if (book.read === "read") {
    readImg.src = "bookread.svg";
  } else {
    readImg.src = "bookunread.svg";
  }
  divRead.appendChild(readImg);
  readImg.classList.add("buttonImg");
  readImg.classList.add("bookRead");

  let readImgTooltip = document.createElement("span");
  divRead.appendChild(readImgTooltip);
  readImgTooltip.classList.add("buttonTooltip");
  readImgTooltip.textContent = "Change Read / Not Read";

  let removeButton = document.createElement("div");
  buttons.appendChild(removeButton);
  removeButton.classList.add("buttons");
  // removeButton.textContent = "Remove Book";

  let removeButtonImg = document.createElement("img");
  removeButtonImg.src = "close.svg";
  removeButton.appendChild(removeButtonImg);
  removeButtonImg.classList.add("buttonImg");
  removeButtonImg.classList.add("removeButton");

  let removeButtonTooltip = document.createElement("span");
  removeButton.appendChild(removeButtonTooltip);
  removeButtonTooltip.classList.add("buttonTooltip");
  removeButtonTooltip.textContent = "Delete book from library";

  let removeBookButton = document.querySelectorAll(".removeButton");
  for (let i = 0; i < removeBookButton.length; i++) {
    removeBookButton[i].addEventListener("click", removeBook, false);
  }

  let readButton = document.querySelectorAll(".bookRead");
  for (let i = 0; i < readButton.length; i++) {
    readButton[i].addEventListener("click", readSwitch, false);
  }
  let addCardBottom = document.querySelector(".addCard");
  addCardBottom.parentNode.appendChild(addCardBottom);
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
  title.focus();
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

function addForm() {
  let title = document.getElementById("bookName").value;
  let author = document.getElementById("bookAuthor").value;
  let pages = document.getElementById("bookPages").value;
  let read = document.getElementById("read").value;
  console.log(title, author, pages, read);
  addBookToLibrary(title, author, pages, read);
  document.querySelector(".addBookForm").style.display = "none";
}

function closeForm() {
  document.querySelector(".addBookForm").style.display = "none";
}

function libraryReset() {
  while (bookLibrary.firstChild) {
    bookLibrary.removeChild(bookLibrary.firstChild);
  }
}

const addBookButton = document.querySelector(".addBookButton");
addBookButton.addEventListener("click", openAddBook, false);

// const addFormButton = document.querySelector(".addForm");
// addFormButton.addEventListener("click", addForm, false);

const closeFormButton = document.querySelector(".closeForm");
closeFormButton.addEventListener("click", closeForm, false);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addForm();
});

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
