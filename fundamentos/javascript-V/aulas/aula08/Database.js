module.expots = class Database {
    #storage = {
        authors: [],
        books: [],
        posters: [],
        orders: [],
        users: [],
    };

    find(key) {
        return this.#storage[key];
    }

    saveAuthor(author) {
        this.#storage.authors.push(author);
    }

    //Books
    findBookByName(bookName) {
        return this.#storage.books.find((b) => b.name === bookName);
    }

    saveBook(book) {
        const bookExists = this.findBookByName(book.name);
        if (!bookExists) {
            this.#storage.books.push(book);
        }
    }

    addBooksToStock(bookName, quantity) {
        const book = this.findBookByName(bookName);
        book?.addToStock(quantity);
    }

    removeBooksFromStock(bookName, quantity) {
        const book = this.findBookByName(bookName);
        book?.removeFromStock(quantity);
    }

    //Posters

    findPostersByName(posterName) {
        return this.#storage.posters.find((p) => p.name === posterName);
    }

    savePoster(poster) {
        const posterExists = this.findPostersByName(poster.name);
        if (!posterExists) {
            this.#storage.posters.push(poster);
        }
    }

    addPostersToStock(posterName, quantity) {
        const poster = this.findPostersByName(posterName);
        poster?.addToStock(quantity);
    }

    removePostersFromStock(posterName, quantity) {
        const poster = this.findPostersByName(posterName);
        poster?.removeFromStock(quantity);
    }

    //Users
    saveUser(user){
        const
    }
};
