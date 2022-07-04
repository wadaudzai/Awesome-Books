let books = [];
if (localStorage.books) books = JSON.parse(localStorage.getItem('books'));

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

const removeBook = (event) => {
    const indexBook = event.currentTarget.dataset.index;
    books.splice(parseInt(indexBook),1);
    refreshBookList();
    localStorage.setItem('books', JSON.stringify(books));
}

const refreshBookList = () => {
    const booksSection = document.getElementById('books-section');
    let listItems = "";
    books.forEach((element, i) => {
        const book = `
        <li>
                    <p>${books[i].title}</p>
                    <p>${books[i].author}</p>
                    <button type="button" class="remove" data-index = "${i}">Remove</button>
        </li>
        `;

        listItems += book;

    });

    booksSection.innerHTML = listItems;
    document.querySelectorAll('.remove').forEach((element) => 
    element.addEventListener('click', removeBook));
}
refreshBookList();

const addBook = () => {
    const book = {};
    book.title = titleInput.value;
    book.author = authorInput.value;
    books.push(book);
    refreshBookList();
    localStorage.setItem('books', JSON.stringify(books));
}

const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const addButton = document.getElementById('submit');

addButton.addEventListener('click', addBook);

// remove button 


