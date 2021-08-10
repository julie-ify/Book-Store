/* eslint-disable max-classes-per-file */
const list = document.getElementById('list');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const addButton = document.querySelector('.add-button');

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class UI {
  static createBook() {
    return new Book(title.value, author.value);
  }

  static saveBook(newBook) {
    const books = JSON.parse(localStorage.getItem('books'));
    if (books === null) {
      localStorage.setItem('books', JSON.stringify([]));
    } else {
      books.push(newBook);
      localStorage.setItem('books', JSON.stringify(books));
    }
  }

  static findBook() {
    return JSON.parse(localStorage.getItem('books'));
  }

  static clearField() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  }

  static displayBook() {
    const addBooks = UI.findBook() || '[]';
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
          localStorage.setItem('books', JSON.stringify(addBooks));
        }
      });
    });
    UI.clearField();
  }
}
addButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (document.getElementById('title').value === '' && document.getElementById('author').value === '') {
    return;
  } else {
    const newBook = UI.createBook();
    UI.saveBook(newBook);
    UI.displayBook();
    const books = UI.findBook();
    if (books.length === 0) {
      const book = UI.createBook();
      const listItem = document.createElement('li');
      listItem.innerHTML = `<h5>${book.title}</h5>
    <h5>${book.author} </h5>`;
      deleteBtn.id = book.title;
      deleteBtn.className = 'removeBtn';
      const br = document.createElement('hr');
      list.appendChild(listItem);
      listItem.appendChild(deleteBtn);
      listItem.appendChild(br);
      deleteBtn.addEventListener('click', () => {
        if (deleteBtn.id === book.title) {
          const index = addBooks.findIndex((rBook) => rBook.title === deleteBtn.id);
          addBooks.splice(index, 1);
          list.removeChild(listItem);
          localStorage.setItem('books', JSON.stringify(books));
        }
      });
      UI.saveBook(book);
    }
  }
});

window.onload = () => {
  UI.displayBook();
};