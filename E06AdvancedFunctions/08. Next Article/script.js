function getArticleGenerator(articles) {
    const result = document.getElementById('content');
    const text = articles.slice();

    return function showArticle() {
        if (text[0] != undefined) {
            const article = document.createElement('article');
            article.innerHTML = text.shift();
            result.appendChild(article);
        }
        return showArticle;
    }
}
