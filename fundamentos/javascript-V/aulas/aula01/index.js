function Book(title, pages, tags, autor) {
    this.title = title;
    this.pages = pages;
    this.tags = tags;
    this.autor = autor;
    this.published = false;
    this.inStock = 0;
    this.addOnStock = function (quantity) {
        this.inStock += quantity;
    };
    this.save = function () {
        //salva no BD
    };
}

const autor = {
    name: "Christopher Paolini",
};
const tags = ["fantasy", "adventure", "fiction"];

const eragon = new Book("Eragon", 468, tags, autor);
console.log(eragon);

const eldest = new Book("Eldest", 644, tags, autor);
console.log(eldest);
