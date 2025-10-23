function renderArticle(articleData) {
    const article = document.createElement("article");
    article.classList.add("article");
    article.id = `article-${articleData.id}`;

    const title = document.createElement("h3");
    title.classList.add("article-title");
    title.textContent = articleData.title;

    const content = document.createElement('div')
}
