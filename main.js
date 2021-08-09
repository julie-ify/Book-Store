const list = document.getElementById('list');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const addButton = document.querySelector('.add-button');
const books = [];
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
window.addEventListener('load', () => {
  const addBooks = JSON.parse(localStorage.getItem('books'));
  if (addBooks !== null) {
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
  }
});