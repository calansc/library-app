Library App Project - https://www.theodinproject.com/lessons/node-path-javascript-library

Challenges / Solutions:
- How to add / remove book 'cards' without looping through the entire library again --- Add:Separate initial library creation function from adding a single book. Remove:Create array of bookLibrary's elements, get ID of element and splice from myLibrary array.
- How to capture form data from 'submit' without using a server --- Set button type to 'button', currently not using html form fields. Setting variables equal to the field ID values then calling the addBookToLibrary function.