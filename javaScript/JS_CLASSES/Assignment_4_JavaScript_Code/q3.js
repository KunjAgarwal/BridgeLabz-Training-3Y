"use strict";

// Q3: Library Management System (Classes + Objects)
class Book {
  constructor(title, author, ISBN) {
    this.title = title;
    this.author = author;
    this.ISBN = String(ISBN);
    this.isIssued = false;
  }

  issueBook() {
    if (this.isIssued) {
      console.log(`"${this.title}" is already issued.`);
      return false;
    }
    this.isIssued = true;
    console.log(`Issued "${this.title}".`);
    return true;
  }

  returnBook() {
    if (!this.isIssued) {
      console.log(`"${this.title}" was not issued.`);
      return false;
    }
    this.isIssued = false;
    console.log(`Returned "${this.title}".`);
    return true;
  }
}

const books = [
  new Book("The Alchemist", "Paulo Coelho", "9780061122415"),
  new Book("Atomic Habits", "James Clear", "9780735211292"),
  new Book("Clean Code", "Robert C. Martin", "9780132350884")
];

function displayAvailableBooks() {
  const available = books.filter(book => !book.isIssued);
  console.log("Available books:");
  available.forEach(book => console.log(`${book.title} — ${book.author} (ISBN: ${book.ISBN})`));
}

function issueByISBN(isbn) {
  const book = books.find(item => item.ISBN === String(isbn));
  if (!book) {
    console.log(`No book found with ISBN ${isbn}.`);
    return;
  }
  book.issueBook();
}

displayAvailableBooks();
issueByISBN("9780735211292");
displayAvailableBooks();
