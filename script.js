// let books = [];
// if (localStorage.books) books = JSON.parse(localStorage.getItem('books'));

// const refreshBookList = () => {
//   const booksSection = document.getElementById('books-section');
//   let listItems = '';
//   books.forEach((element, i) => {
//     const book = `
//         <li class="single-book">
//                     <p>"${books[i].title}" by ${books[i].author}</p>
//                     <button type="button" class="remove" data-index = "${i}">Remove</button>
//         </li>
//         `;

//     listItems += book;
//   });

//   booksSection.innerHTML = listItems;

//   document.querySelectorAll('.remove').forEach((element) => element.addEventListener('click', (event) => {
//     const indexBook = event.currentTarget.dataset.index;
//     books.splice(parseInt(indexBook, 10), 1);
//     refreshBookList();
//     localStorage.setItem('books', JSON.stringify(books));
//   }));
// };
// refreshBookList();

// const titleInput = document.getElementById('title');
// const authorInput = document.getElementById('author');
// const addButton = document.getElementById('submit');

// const addBook = () => {
//   const book = {};
//   book.title = titleInput.value;
//   book.author = authorInput.value;
//   books.push(book);
//   refreshBookList();
//   localStorage.setItem('books', JSON.stringify(books));
// };

// addButton.addEventListener('click', addBook);
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const addButton = document.getElementById('submit');

class Booklist {
	constructor() {
		this.books = [];
	}
	refreshBookList() {
		let listItems = '';
		const booksSection = document.getElementById('books-section');
		this.books.forEach((element, i) => {
			const book = `<li class="single-book">
                                 <p>"${this.books[i].title}" by ${this.books[i].author}</p>
                                 <button type="button" class="remove" data-index = "${i}">Remove</button>
                     </li>`;

			listItems += book;

		});

		booksSection.innerHTML = listItems;
	}

}

const booklist = new Booklist;
booklist.refreshBookList();

function addBook() {
	const book = {};
	book.title = titleInput.value;
	book.author = authorInput.value;
	booklist.books.push(book);
	booklist.refreshBookList();
}

addButton.addEventListener('click', addBook);


