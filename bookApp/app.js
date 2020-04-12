// Book Constructor to create book instances (objects)
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor: set of prototype methods to do with the UI (show, delete etc.)
function UI() {}

UI.prototype.addBookToList = function (book) {
  const list = document.querySelector("#book-list");
  // create table row element:
  const row = document.createElement("tr");
  // insert columns using the data
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="# class="delete">X</td>`;

  list.appendChild(row);
};

UI.prototype.clearFields = function () {
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#isbn").value = "";
};

// Event listeners
document.querySelector("#book-form").addEventListener("submit", function (e) {
  // get form values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  // instantiate book object
  const book = new Book(title, author, isbn);

  // instantiate a UI object
  const ui = new UI();

  // Add book to list
  ui.addBookToList(book);

  // Clear fields
  ui.clearFields();

  e.preventDefault();
});
