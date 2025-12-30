const myLibrary = []

function Book(title, author, pages, read, id){
    if(!new.target){
        throw Error("Use 'new'")
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;

}

Book.prototype.info = function(){
    const readStatus = this.read ? "has been read" : "not read yet";
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}, ID: ${this.id}` 
}


function AddBookToLibrary(title, author, pages, read){
    const id = crypto.randomUUID()
    const newBook = new Book(title, author, pages, read, id)
    myLibrary.push(newBook)
}

AddBookToLibrary('The Hobbit', 'J.R.R Toklien', 295, false)
AddBookToLibrary('The Journey of Elaina', 'Jougi Shiraishi', 286, true)
AddBookToLibrary('Harry Potter', 'J.K. Rowling', 223, false)

console.log(myLibrary[0].info())
console.log(myLibrary[1].info())
console.log(myLibrary[2].info())


const shelf = document.querySelector(".shelf")
for (const book of myLibrary){
    const bookOnShelf = document.createElement("span")
    bookOnShelf.textContent = book.info()
    shelf.appendChild(bookOnShelf)
}
