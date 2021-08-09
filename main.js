const bookSection = document.getElementById('book-section');
const list = document.createElement('ul');
bookSection.appendChild(list);

// Initialise the book
// display book on the UI
function displayBooks() {
  const books = getBooks();
  books.forEach((book) => {
    addBookToList(book);
  });
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

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const form = document.querySelector('#form');
form.addEventListener('submit', addNewBooks);
function addNewBooks(e) {
  e.preventDefault();
  if (title.value === '' && author.value === '') {
    return;
  } else {
    const book = {
      title: document.querySelector('#title').value,
      author: document.querySelector('#author').value,
    };

    addBookToList(book);
    addBook(book);
  }
}

// remove book
list.addEventListener('click', (e) => {
  removeBook(e.target);
  remove(e.target.previousElementSibling.textContent);
});

function removeBook(element) {
  if (element.classList.contains('remove')) {
    element.parentElement.remove();
  }
}

displayBooks();

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

// Add books to local storage
function addBook(book) {
  let books = getBooks();
  books.push(book);

  localStorage.setItem('books', JSON.stringify(books));
}

// Remove book from local storage
function remove(author) {
  let books = getBooks();
  books.forEach((book, index) => {
    if (book.author === author) {
      books.splice(index, 1);
    }
  });
  localStorage.setItem('books', JSON.stringify(books));
}

console.log(localStorage);
