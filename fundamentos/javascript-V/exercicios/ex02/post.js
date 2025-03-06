const Coment = require("./coment");
class Post {
    constructor(title, body, author) {
        this.title = title;
        this.body = body;
        this.author = author;
        this.comments = [];
        this.createdAt = new Date();
    }

    addComent(username, content) {
        this.comments.push(new Coment(username, content));
    }
}

module.exports = Post;
