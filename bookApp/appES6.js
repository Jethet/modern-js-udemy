class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// The UI will have all the methods that relate to the user interface
class UI {
  addBookToList(book) {
    const list = document.querySelector("#book-list");
    const row = document.createElement("tr"); // Create row element with the new data
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X</td>`;
    list.appendChild(row);
  }

  showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");

    container.insertBefore(div, form);

    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }

  deleteBook(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
    }
  }

  clearFields(target) {
    document.querySelector("#title").value;
    document.querySelector("#author").value;
    document.querySelector("#isbn").value;
  }
}

// Local storage class
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }

  static displayBooks() {
    const books = Store.getBooks();
    books.forEach(function (book) {
      const ui = new UI();
      //Add book to UI
      ui.addBookToList(book);
    });
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach(function(book, index) {
      if(book.isbn === isbn){
        books.splice(index, 1)
      }
    })
    localStorage.setItem('books', JSON.stringify(books))
  }
}

// Event listener DOM load
document.addEventListener("DOMContentLoaded", Store.displayBooks);

// Event listener for adding of book
document.querySelector("#book-form").addEventListener("submit", function (e) {
  // get form values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  // instantiate book object
  const book = new Book(title, author, isbn);

  // instantiate a UI object
  const ui = new UI(); // This object has the four methods in its prototype

  // Validate submitted data
  if (title === "" || author === "" || isbn === "") {
    // Error alert
    ui.showAlert("Please fill in all fields", "error");
  } else {
    // Add book to list
    ui.addBookToList(book);

    // Add to local storage
    Store.addBook(book);

    // show alert when book is added
    ui.showAlert("Book added!", "success");

    // Clear fields
    ui.clearFields();
  }

  e.preventDefault();
});

// Event listener for deleting book
document.querySelector("#book-list").addEventListener("click", function (e) {
  const ui = new UI();
  ui.deleteBook(e.target);

  // Remove from LS: unique id for book is isbn; to access this you need to
  // traverse the dom: the e.target is the <a>, one up is <td>, and to get
  // to the <td> before that (which has the isbn), use previousElementSibling:
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // Show alert:
  ui.showAlert("Book Removed", "success");
  e.preventDefault();
});
