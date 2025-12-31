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

// Starter Books
AddBookToLibrary('The Hobbit', 'J.R.R Toklien', 295, false)
AddBookToLibrary('The Journey of Elaina', 'Jougi Shiraishi', 286, true)
AddBookToLibrary('Harry Potter', 'J.K. Rowling', 223, false)
showShelf()

console.log(myLibrary[0].info())
console.log(myLibrary[1].info())
console.log(myLibrary[2].info())
console.log(myLibrary)


function removeBookById(id) {
    const index = myLibrary.findIndex(book => book.id === id)
    if (index !== -1) {
        myLibrary.splice(index, 1)
    }

    const el = document.querySelector(`[data-book-id="${id}"]`)
    el?.remove()
}
// Show book on shelf
const shelf = document.querySelector(".shelf")
function showShelf(){
    shelf.innerHTML =''
    for (const book of myLibrary){
        const bookOnShelf = document.createElement("span")
        bookOnShelf.textContent = book.info()
        bookOnShelf.dataset.bookId = book.id

        const delete_button = document.createElement("button")
        delete_button.textContent = "Remove Book"
        delete_button.addEventListener('click', (e) => {
            removeBookById(book.id)
            bookOnShelf.remove()
        })
    
        bookOnShelf.appendChild(delete_button)
        shelf.appendChild(bookOnShelf)
    }
}




// Add book to shelf
// Buttons
const addBook = document.querySelector(".add_Book_Button")
const cancelBook = document.querySelector(".cancel")
const submitBook = document.querySelector(".submit")
// Form
const book_form = document.querySelector(".book_form")
const book_title = document.querySelector("#book_title")
const book_author = document.querySelector("#book_author")
const book_pages = document.querySelector("#book_pages")
const book_read = document.querySelector("#book_read")

addBook.addEventListener('click', () => {
    book_form.showModal()
})

function clear_inputs(){
    book_title.value = ''
    book_author.value = ''
    book_pages.value = ''
    book_read.value = 'false'
}

cancelBook.addEventListener('click', (e) => {
    e.preventDefault()
    clear_inputs()
    book_form.close()
})

submitBook.addEventListener('click', (e) => {
    e.preventDefault()

    const title = book_title.value
    const author = book_author.value
    const pages = book_pages.value
    const read = book_read.value
    AddBookToLibrary(title, author, pages, read)
    showShelf()
    clear_inputs()
    book_form.close()
})
