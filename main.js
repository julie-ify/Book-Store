const bookSection = document.getElementById('book-section');
const list = document.createElement('ul');
bookSection.appendChild(list);

// Initialise the book
// display book on the UI
function displayBooks() {
  const bookList = [
    {
      title: 'Introduction to Java',
      author: 'Carnegie'
    },
    {
      title: 'Think and Grow Rish',
      author: 'Napolion Hill'
    }
  ]

  const books = bookList;
  books.forEach((book) => {
    addBookToList(book);
  })
  
}

function addBookToList(book) {
  const listItem = document.createElement('li');
  listItem.innerHTML = `
  <h5>${book.title}</h5>
  <h5>${book.author}</h5>
  <button class="remove">Remove</button>
  <hr>
  `

  list.appendChild(listItem);
}

const form = document.querySelector('#form');
form.addEventListener('submit', addNewBooks);
function addNewBooks(e){
    e.preventDefault();
  const book = {
    title: document.querySelector('#title').value,
    author: document.querySelector('#author').value,
  }
  addBookToList(book);
}
displayBooks()
// Add books to the UI

// Add new book

// remove book

list.addEventListener('click', (e) => {
  removeBook(e.target);
});

function removeBook(element){
  if(element.classList.contains('remove')){
    element.parentElement.remove();
  }
}

// Add and remove books from the local storage