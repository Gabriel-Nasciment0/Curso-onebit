const Author = require("./author");
const Post = require("./post");

const jhon = new Author("Jhon");

const post1 = jhon.writePost("Titulo", "comentario");
post1.addComent("user1", "coment 1");
post1.addComent("user2", "coment 2");
console.log(jhon);
console.log(post1);
//  Simulando um Blog com Classes Crie uma aplicação javascript que simule um
// funcionamento básico de blog utilizando classes e associações. Você deverá criar
// uma classe Post e uma classe Comment, onde uma instância de Post poderá receber
// vários comentários. As instâncias de Post também devem ter um método específico
// para adição de comentários nelas. Você também deverá criar uma classe Author, e
// os objetos da classe Post também devem possuir um objeto da classe Author, que é
// o autor do post. Além disso, os objetos da classe Author também devem possuir um
// array de posts (objetos da classe Post) e um método específico para criação de
// posts, que deverá criar uma instância utilizando aquele próprio autor, incluir o
// post no array e então retornar o post criado.
