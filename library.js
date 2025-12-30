const myLibrary = []

function book(title, author, pages, read, id){
    if(!new.target){
        throw Error("Use 'new'")
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;

    this.info = function(){
        return `${title} by ${author}, ${pages} pages, ${read}` 
    }
}

function addBookToLibrary(title, author, pages, read){
    const id = crypto.randomUUID()
    let book = book.call(title, author, pages, read, id)
    myLibrary.push(book)
}

const hobbit = new book('hobbit', 'toklen', 255, 'read')

console.log(hobbit.info())


