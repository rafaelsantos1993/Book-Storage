//Creates a constructor with the infomation of the books
function makeBook(author, title, page, read) {
    this.author = author
    this.title = title
    this.page = page 
    this.read = read
    this.info = function () {
        return `The author is ${author}, for the book ${title}, containing ${page} and it is status is ${read}`;
    } 
}
