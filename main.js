const list = document.getElementById('list');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const addButton = document.querySelector('.add-button')

const books;
const bookList = (book) => {
  localStorage.setItem('books', JSON.stringify(book));
};


const addNewBook = (title, author) => {
  const addBooks = JSON.parse(localStorage.getItem('books'));
  if (addBooks !== null) {
    addBooks.push({ title: title.value, author: author.value });

    bookList(addBooks);
    list.innerHTML = '';
    addBooks.forEach((bookItem) => {
      const listItem = document.createElement('li');
      const deleteBtn = document.createElement('button');
      deleteBtn.innerText = 'Remove';
      listItem.innerHTML = `<h5>${bookItem.title}</h5>
    <h5>${bookItem.author} </h5>`;
      deleteBtn.id = bookItem.title;
      deleteBtn.className = 'removeBtn';
      const br = document.createElement('hr');
      list.appendChild(listItem);
      listItem.appendChild(deleteBtn);
      listItem.appendChild(br);
      deleteBtn.addEventListener('click', () => {
        if (deleteBtn.id === bookItem.title) {
          const index = addBooks.findIndex((rBook) => rBook.title === deleteBtn.id);
          addBooks.splice(index, 1);
          list.removeChild(listItem);
          bookList(addBooks);
        }
      });
    });
  } else { bookList(books); }
};


addButton.addEventListener('click', () => {
  addNewBook(title, author);
});

// Add books to list item
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

// Clear input field after add a book to the UI
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

// Add new books to the Book store
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

form.addEventListener('submit', addNewBooks);

// display book on the UI
function displayBooks() {
  const books = getBooks();
  books.forEach((book) => {
    addBookToList(book);
  });
}

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

// Remove book from the UI
function removeBook(element) {
  if (element.classList.contains('remove')) {
    element.parentElement.remove();
  }
}
list.addEventListener('click', (e) => {
  removeBook(e.target);
  remove(e.target.previousElementSibling.textContent);
});

displayBooks();