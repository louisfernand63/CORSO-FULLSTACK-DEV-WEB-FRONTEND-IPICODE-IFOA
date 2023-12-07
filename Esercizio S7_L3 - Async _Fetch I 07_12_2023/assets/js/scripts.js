/* 
    Devi realizzare una pagina per una “libreria” contenenente libri derivanti da una chiamata HTTP di tipo GET. 
    Endpoint: https://striveschool-api.herokuapp.com/books 
    Requisiti della pagina: 
    ● Utilizza Bootstrap 5 per creare una pagina responsive con una sezione centrale a 3 o 4 colonne per riga 
    ● Ogni colonna avrà al suo interno un elemento Card di Bootstrap, creata a partire da un singolo libro:               
    nella “card image” inserisci la copertina del libro, nel “card body” il suo titolo e il suo prezzo. 
    ● Sempre nel “card body” inserisci un pulsante “Scarta”. Se premuto, dovrà far scomparire la card dalla pagina. 
    ● EXTRA: crea una lista che rappresenti il carrello del negozio e inseriscila dove vuoi nella pagina. Aggiungi un altro pulsante “Compra ora” vicino a “Scarta” nelle card per aggiungere il libro al carrello. Il carrello dovrà persistere nello storage del browser. 
    ● EXTRA: aggiungi vicino ad ogni libro del carrello un pulsante per rimuoverlo dal carrello
*/

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://striveschool-api.herokuapp.com/books');
xhr.send();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        let books = data.books;
        let booksList = document.getElementById('books');
        books.forEach(book => {
            let card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <div class="card-image">
                    <img src="${book.cover}" alt="${book.title}">
                </div>
                <div class="card-body">
                    <h3 class="card-title">${book.title}</h3>
                    <p class="card-text">${book.description}</p>
                    <p class="card-text">${book.price} €</p>
                    <button class="btn btn-danger">Scarta</button>
                </div>
            `;
            booksList.appendChild(card);
        });
    }
};
)
let form = document.getElementById('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let price = document.getElementById('price').value;
    let description = document.getElementById('description').value;
    let cover = document.getElementById('cover').value;
    let book = {
        title: title,
        author: author,
        price: price,
        description: description,
        cover: cover
    };
    let books = JSON.parse(localStorage.getItem('books'));
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    renderBooks();
    form.reset();
});

// Render Books
renderBooks();

let booksList = document.getElementById('books');
booksList.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-danger')) {
        let books = JSON.parse(localStorage.getItem('books'));
        let book = e.target.parentElement.parentElement;
        let title = book.querySelector('.card-title').innerText;
        let author = book.querySelector('.card-text').innerText;
        let price = book.querySelector('.card-text').innerText;
        let description = book.querySelector('.card-text').innerText;
        let cover = book.querySelector('.card-text').innerText;
        let book = {
            title: title,
            author: author,
            price: price,
            description: description,
            cover: cover
        };
        books.splice(books.indexOf(book), 1);
        localStorage.setItem('books', JSON.stringify(books));
        renderBooks();
    }
});

// Render Books
function renderBooks() {
    let books = JSON.parse(localStorage.getItem('books'));
    let booksList = document.getElementById('books');
    booksList.innerHTML = '';
    books.forEach(function(book) {
        let card = document.createElement('div');
        card.classList.add('card');
        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        let cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.innerText = book.title;
        let cardText = document.createElement('p');
        cardText.classList.add('card-text');
        cardText.innerText = book.author;
        let cardPrice = document.createElement('p');
        cardPrice.classList.add('card-text');
        cardPrice.innerText = book.price;
        let cardButton = document.createElement('button');
        cardButton.classList.add('btn', 'btn-danger');
        cardButton.innerText = 'Delete';
        cardButton.addEventListener('click', deleteBook);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(cardPrice);
        cardBody.appendChild(cardButton);
        card.appendChild(cardBody);
        booksList.appendChild(card);
    });
}

function addBook() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let price = document.getElementById('price').value;
    let book = {
        title: title,
        author: author,
        price: price
    }
    books.push(book);
    saveBooks();
    renderBooks();
}

function deleteBook(e) {
    let book = e.target.parentElement.parentElement;
    let index = books.indexOf(book);
    books.splice(index, 1);
    saveBooks();
    renderBooks();
}

function saveBooks() {
    localStorage.setItem('books', JSON.stringify(books));
}
function loadBooks() {
    let books = JSON.parse(localStorage.getItem('books'));
    if (books) {
        books.forEach(book => {
            addBookToList(book);
        });
    }
}

function addBookToList(book) {
    let card = document.createElement('div');
    card.classList.add('card');
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    let cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.innerText = book.title;
    let cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.innerText = book.author;
    let cardPrice = document.createElement('p');
    cardPrice.classList.add('card-text');
    cardPrice.innerText = book.price;
    let deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', deleteBook);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardPrice);
    cardBody.appendChild(deleteButton);
    card.appendChild(cardBody);
    bookList.appendChild(card);
}

function deleteBook(event) {
    let book = event.target.parentElement.parentElement.children[0].innerText;
    let books = JSON.parse(localStorage.getItem('books'));
    books = books.filter(b => b.title !== book);
    localStorage.setItem('books', JSON.stringify(books));
    event.target.parentElement.parentElement.remove();
}
function addBook(event) {
}
function addBookToList(book) {
    let card = document.createElement('div');
    card.classList.add('card');
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    let cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.innerText = book.title;
    let cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.innerText = book.text;
    let cardPrice = document.createElement('p');
    cardPrice.classList.add('card-price');
    cardPrice.innerText = book.price;
    let deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', deleteBook);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardPrice);
    cardBody.appendChild(deleteButton);
    card.appendChild(cardBody);
    booksList.appendChild(card);
}
function getBooks() {
    let books = JSON.parse(localStorage.getItem('books'));
    if (books) {
        books.forEach(addBookToList);
    }
}
function deleteBook(event) {
    let book = event.target.parentElement.parentElement;
    let books = JSON.parse(localStorage.getItem('books'));
    let index = books.indexOf(book);
    books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(books));
    book.remove();
}
function addBookToList(book) {
    let card = document.createElement('div');
    card.classList.add('card');
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    let cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.innerText = book.title;
    let cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.innerText = book.description;
    let cardPrice = document.createElement('p');
    cardPrice.classList.add('card-text');
    cardPrice.innerText = book.price;
    let deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', deleteBook);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardPrice);
    cardBody.appendChild(deleteButton);
    card.appendChild(cardBody);
    booksList.appendChild(card);
}
function getBooks() {
    let books = JSON.parse(localStorage.getItem('books'));
    if (books) {
        books.forEach(addBookToList);
    } else {
        // if there are no books in the list, display a message
        let noBooks = document.createElement('p');
        noBooks.innerText = 'No books in the list';
        booksList.appendChild(noBooks);
    }
}
function addBookToList(book) {
    let card = document.createElement('div');
    card.classList.add('card');
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    let cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.innerText = book.title;
    let cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.innerText = book.author;
    let cardPrice = document.createElement('p');
    cardPrice.classList.add('card-text');
    cardPrice.innerText = book.price;
    let deleteButton = document.createElement('button');
    deleteButton.classList.add('btn');
    deleteButton.classList.add('btn-danger');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', () => deleteBook(book));
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardPrice);
    cardBody.appendChild(deleteButton);
    card.appendChild(cardBody);
    booksList.appendChild(card);
}
function deleteBook(book) {
    let bookIndex = books.findIndex(b => b.id === book.id);
    if (bookIndex !== -1) {
        books.splice(bookIndex, 1);
        saveBooks();
        showBooks();
    }
}
function saveBooks() {
    localStorage.setItem('books', JSON.stringify(books));
}
function loadBooks() {
    let books = JSON.parse(localStorage.getItem('books'));
    if (books) {
        books.forEach(book => addBook(book));
    } else {
        books = [];
    }
}
function addBook(book) {
    let bookIndex = books.findIndex(b => b.id === book.id);
    if (bookIndex === -1) {
        books.push(book);
    }
}
function showBooks() {
    let booksList = document.querySelector('.books-list');
    booksList.innerHTML = '';
    books.forEach(book => addBookToList(book));
}
function addBookToList(book) {
    let card = document.createElement('div');
    card.classList.add('card');
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    let cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.innerText = book.title;
    let cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.innerText = book.author;
    let deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-danger', 'delete-btn');
    deleteButton.innerText = 'Delete';
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    card.appendChild(cardBody);
    card.appendChild(deleteButton);
    booksList.appendChild(card);
}
function deleteBook(id) {
    let bookIndex = books.findIndex(b => b.id === id);
    if (bookIndex !== -1) {
        books.splice(bookIndex, 1);
    }
}
function getBook(id) {
    let book = books.find(b => b.id === id);
    return book;
}
function addBook() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let book = {
        id: Date.now(),
        title: title,
        author: author
    };
    books.push(book);
    // Add book to the list
    addBookToList(book);
    // Reset form
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
}
function deleteBookFromList(id) {
    let card = document.getElementById(id);
    card.remove();
}
