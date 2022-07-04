const books = [];

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

const refreshBookList = () => {
    const booksSection = document.getElementById('books-section');
    let listItems = "";
    books.forEach((element, i) => {
        const book = `
        <li>
                    <p>${books[i].title}</p>
                    <p>${books[i].author}</p>
                    <button type="button">Remove</button>
        </li>
        `;

        listItems += book;

    });

    booksSection.innerHTML = listItems;
}
refreshBookList();

const addBook = () => {
    const book = {};
    book.title = titleInput.value;
    book.author = authorInput.value;
    books.push(book);
    refreshBookList();
}

const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const addButton = document.getElementById('submit');

addButton.addEventListener('click', addBook);
