// variables

const addButton = document.getElementById('add-button');
const removeButton = document.getElementById('remove-button');
const postDialogWindow = document.getElementById('post-book');
const confirmButton = document.getElementById('confirm-button');
const cancelButton = document.getElementById('cancel-button');
const output = document.querySelector('output');
const title = document.getElementById('title');
const author = document.getElementById('author');
const page = document.getElementById('page');
const read = document.getElementById('read');
const myLibrary = [];

// contructor to save new books
function makeBook(author, title, page, read) {
  this.author = author;
  this.title = title;
  this.page = page;
  this.read = read;
}

// open the dialog
addButton.addEventListener('click', () => {
  postDialogWindow.showModal();
});

// close the dialog
cancelButton.addEventListener('click', () => {
  postDialogWindow.close();
});

// gets information and creats a new book
confirmButton.addEventListener('click', () => {
  // makes a new mook with the constructor
  const newBook = new makeBook(author.value, title.value, page.value, read.checked);

  // add to the array of information
  myLibrary.push(newBook);
  // loops through the array, posting each new book in a post card
  for (i = 0; i < myLibrary.length; i++) {
    const newPostCard = document.createElement('div');
    newPostCard.className = 'post-card';
    const pTitle = document.createElement('p');
    const pAuthor = document.createElement('p');
    const pPage = document.createElement('p');
    const pRead = document.createElement('p');
    pTitle.textContent += myLibrary[i].title;
    pTitle.classList.add('book-title');
    pAuthor.textContent += myLibrary[i].author;
    pAuthor.classList.add('book-author');
    pPage.textContent += myLibrary[i].page;
    pPage.classList.add('book-page');
    myLibrary[i].read == true ? pRead.textContent += 'Read' : pRead.textContent += 'Not Read';
    pRead.classList.add('book-page');
    newPostCard.appendChild(pTitle);
    newPostCard.appendChild(pAuthor);
    newPostCard.appendChild(pPage);
    newPostCard.appendChild(pRead);
    output.appendChild(newPostCard);
  }
});
