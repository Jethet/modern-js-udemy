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
    <td><a href="# class="delete" autocomplete="off">X</td>`;

  list.appendChild(row);
};

// Show Alert
UI.prototype.showAlert = function (message, className) {
  // Create error alert element
  const div = document.createElement("div");
  // Add classes
  div.className = `alert ${className}`;
  // Add text to the alert element
  div.appendChild(document.createTextNode(message));
  // Get parent (to insert this alert element into the DOM)
  const container = document.querySelector(".container");
  const form = document.querySelector("#book-form");
  // To insert the element into the DOM, first name the element (the div) and secondly
  // the item BEFORE WHICH the div needs to be inserted (the form)
  container.insertBefore(div, form);

  // Timeout for alert to disappear after 3 seconds
  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 3000);
};

// Delete Book
UI.prototype.deleteBook = function(target) {
  if(target.className === 'delete'){
    target.parentElement.parentElement.remove()   // traversing the DOM to get from <a> element to
    deleteStoredBook(target.parentElement.parentElement)
  }                                              // <td> and then to <tr> element, to delete a row
}

UI.prototype.storeBook = function(book) {
  let books;
  if (localStorage.getItem("books") === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem("books"));
  }
  books.push(book);

  localStorage.setItem("books", JSON.stringify(books));
}

UI.prototype.deleteStoredBook = function(book) {
  let books
  if(localStorage.getItem("books") === null) {
    books = []
  } else {
    books = JSON.parse(localStorage.getItem('books'))
  }
  books.forEach(function(book, index) {
    if(book.isbn === isbn){
    books.splice(index, 1)
    }
  })
  localStorage.setItem('books', JSON.stringify(books))
}


UI.prototype.clearFields = function () {
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#isbn").value = "";
};

// Event listener for adding of book
document.querySelector("#book-form").addEventListener("submit", function (e) {
  // get form values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  // instantiate book object
  const book = new Book(title, author, isbn);

  // instantiate a UI object
  const ui = new UI();  // This object has the four methods in its prototype

  // Validate submitted data
  if (title === "" || author === "" || isbn === "") {
    // Error alert
    ui.showAlert("Please fill in all fields", "error");
  } else {
    // Add book to list
    ui.addBookToList(book);

    // show alert when book is added
    ui.showAlert('Book added!', 'success')

    ui.storeBook(book)

    // Clear fields
    ui.clearFields();
  }

  e.preventDefault();
});

// Event listener for deleting book
document.querySelector('#book-list').addEventListener('click', function(e){
  const ui = new UI()
  ui.deleteBook(e.target)

  // Show alert:
  ui.showAlert('Book Removed', 'success')
  e.preventDefault()
})
