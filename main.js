const bookSection = document.getElementById('book-section');
const list = document.createElement('ul');
bookSection.appendChild(list);
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const form = document.querySelector('#form');

// get books from the local storage
function getBooks() {
  let books;
  if (localStorage.getItem('books') === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('books'));
  }
  return books;
}

function addBookToList(book) {
  const listItem = document.createElement('li');
  listItem.innerHTML = `
  <h5>${book.title}</h5>
  <h5>${book.author}</h5>
  <button class="remove">Remove</button>
  <hr>
  `;

  list.appendChild(listItem);
}

function initializeInput() {
  title.value = '';
  author.value = '';
}

// Add books to local storage
function addBook(book) {
  const books = getBooks();
  books.push(book);

  localStorage.setItem('books', JSON.stringify(books));
}

function addNewBooks(e) {
  e.preventDefault();
  if (title.value === '' && author.value === '') {
    return;
  }
  const book = {
    title: document.querySelector('#title').value,
    author: document.querySelector('#author').value,
  };

  addBookToList(book);
  addBook(book);
  initializeInput();
}

// Initialise the book
// display book on the UI
function displayBooks() {
  const books = getBooks();
  books.forEach((book) => {
    addBookToList(book);
  });
}

form.addEventListener('submit', addNewBooks);
// Remove book from local storage
function remove(author) {
  const books = getBooks();
  books.forEach((book, index) => {
    if (book.author === author) {
      books.splice(index, 1);
    }
  });
  localStorage.setItem('books', JSON.stringify(books));
}

function removeBook(element) {
  if (element.classList.contains('remove')) {
    element.parentElement.remove();
  }
}

// remove book
list.addEventListener('click', (e) => {
  removeBook(e.target);
  remove(e.target.previousElementSibling.textContent);
});

displayBooks();