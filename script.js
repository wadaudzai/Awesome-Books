const books = [
    {
        title: 'The kite runner',
        author: 'Khalid',
    },
];

books.forEach((element, i) => {
    const booksSection = document.getElementById('books-section');

    const book = `
    <li>
                <p>${books[i].title}</p>
                <p>${books[i].author}</p>
                <button type="button">Remove</button>
     </li>
    `;

    booksSection.innerHTML += book;

});