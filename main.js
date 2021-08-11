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
      const listItem = document.createElement('tr');
      const tdata = document.createElement('td');
      const deleteBtn = document.createElement('button');
      deleteBtn.innerText = 'Remove';
      listItem.innerHTML = `<td>${bookItem.title}</td>
      <td>${bookItem.author}</td>`;
      listItem.appendChild(tdata);
      list.appendChild(listItem);
      tdata.className = 'd-flex justify-content-end';
      deleteBtn.id = bookItem.title;
      deleteBtn.className = 'removeBtn';
      tdata.appendChild(deleteBtn);
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
  }
  const newBook = UI.createBook();
  UI.saveBook(newBook);
  UI.displayBook();
  const books = UI.findBook();
  if (books.length === 0) {
    const book = UI.createBook();
    const listItem = document.createElement('tr');
    const tdata = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Remove';
    listItem.innerHTML = `<td>${book.title}</td>
    <td>${book.author}</td>`;
    listItem.appendChild(tdata);
    deleteBtn.id = book.title;
    deleteBtn.className = 'removeBtn';
    list.appendChild(listItem);
    tdata.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', () => {
      if (deleteBtn.id === book.title) {
        const index = books.findIndex((rBook) => rBook.title === deleteBtn.id);
        books.splice(index, 1);
        list.removeChild(listItem);
        localStorage.setItem('books', JSON.stringify(books));
      }
    });
    UI.saveBook(book);
  }
});

window.onload = () => {
  UI.displayBook();
};