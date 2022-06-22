class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }
    addBook(bookName, bookAuthor) {
        if (this.capacity <= this.books.length) {
            throw new Error("Not enough space in the collection.");
        }
        const newBook = {
            bookName,
            bookAuthor,
            payed: false
        };
        this.books.push(newBook);

        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        const wantedBook = this.books.find(el => el.bookName == bookName);
        if (!wantedBook) {
            throw new Error(`${bookName} is not in the collection.`);
        }
        if (wantedBook.payed == true) {
            throw new Error(`${bookName} has already been paid.`);
        }
        wantedBook.payed = true;

        return `${bookName} has been successfully paid.`;
    }
    removeBook(bookName) {
        const wantedBook = this.books.find(el => el.bookName == bookName);
        if (!wantedBook) {
            throw new Error('The book, you\'re looking for, is not found.');
        }
        if (!wantedBook.payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }
        const bookIndex = this.books.indexOf(wantedBook);
        this.books.splice(bookIndex, 1);

        return `${bookName} remove from the collection.`;
    }
    getStatistics(bookAuthor) {
        let result = [];
        if (bookAuthor) {
            const book = this.books.find(el => el.bookAuthor == bookAuthor);
            if (!book) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }
            const isPayed = book.payed ? 'Has Paid' : 'Not Paid';
            return `${book.bookName} == ${book.bookAuthor} - ${isPayed}.`;
        } else {
            result.push(`The book collection has ${(this.capacity - this.books.length)} empty spots left.`);
            let sortedBooks = this.books.sort((el1, el2) => el1.bookName.localeCompare(el2.bookName));
            sortedBooks.forEach(el => {
                const isPayed = el.payed ? 'Has Paid' : 'Not Paid';
                result.push(`${el.bookName} == ${el.bookAuthor} - ${isPayed}.`);
            });
            return result.join('\n');
        }
    }
}

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());









