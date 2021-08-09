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

// Add books to the UI

// Add new book

// remove book

// Add and remove books from the local storage