const addButton = document.getElementById("add-button");
const removeButton = document.getElementById("remove-button");
const postDialogWindow = document.getElementById("post-book");
const confirmButton = document.getElementById("confirm-button");
const cancelButton = document.getElementById("cancel-button");
const output = document.querySelector("output")
let title = document.getElementById("title")
let author = document.getElementById("author")
let page = document.getElementById("page")
let read = document.getElementById("read")
let myLibrary = []

//contructor to save new books 
function makeBook(author, title, page, read) {
    this.author = author
    this.title = title
    this.page = page
    this.read = read
}

//open the dialog 
addButton.addEventListener("click", () => {
    postDialogWindow.showModal();
});

//gets information and creats a new book 
postDialogWindow.addEventListener("close", () => {
    //makes a new mook with the constructor 
    let newBook = new makeBook(author.value, title.value, page.value, read.checked)
    
    //add to the array of information
    myLibrary.push(newBook)

    //loops through the array, posting each new book in a post card 
    for (i=0; i<myLibrary.length; i++){
        let newPostCard = document.createElement("div");
        newPostCard.className = "post-card"
        let pTitle = document.createElement("p");
        let pAuthor = document.createElement("p");
        let pPage = document.createElement("p");
        let pRead = document.createElement("p");
        pTitle.textContent += myLibrary[i]["title"];
        pAuthor.textContent += myLibrary[i]["author"];
        pPage.textContent += myLibrary[i]["page"];
        myLibrary[i]["read"] == true ? pRead.textContent += "Read" : pRead.textContent += "Not Read"
        newPostCard.appendChild(pTitle);
        newPostCard.appendChild(pAuthor);
        newPostCard.appendChild(pPage);
        newPostCard.appendChild(pRead);
        output.appendChild(newPostCard);
    }
})

