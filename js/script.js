/* eslint-disable max-classes-per-file */
/* eslint-disable no-unused-vars */
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const addButton = document.getElementById('submit');

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class Booklist {
  constructor() {
    this.books = [];
    if (localStorage.books) this.books = JSON.parse(localStorage.getItem('books'));
  }

  refreshBookList() {
    let listItems = '';
    const booksSection = document.getElementById('books-section');
    this.books.forEach((element, i) => {
      const book = `<li class="single-book">
                                 <p>"${this.books[i].title}" by ${this.books[i].author}</p>
                                 <button type="button" class="remove" data-index = "${i}" onclick="removeButton(event)">Remove</button>
                    </li>`;
      listItems += book;
    });

    booksSection.innerHTML = listItems;
  }
}

const booklist = new Booklist();
booklist.refreshBookList();

function addBook() {
  const book = new Book(titleInput.value, authorInput.value);
  booklist.books.push(book);
  booklist.refreshBookList();
  localStorage.setItem('books', JSON.stringify(booklist.books));
  titleInput.value = '';
  authorInput.value = '';
}

function removeButton(event) {
  const indexBook = event.currentTarget.dataset.index;
  booklist.books.splice(parseInt(indexBook, 10), 1);
  booklist.refreshBookList();
  localStorage.setItem('books', JSON.stringify(booklist.books));
}

addButton.addEventListener('click', addBook);
