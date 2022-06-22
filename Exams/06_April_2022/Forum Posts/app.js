function solve() {
  const getTitle = document.getElementById('post-title');
  const getCategory = document.getElementById('post-category');
  const getContent = document.getElementById('post-content');
  const publishButton = document.getElementById('publish-btn');

  publishButton.addEventListener('click', getInfo);

  const ul = document.getElementById('review-list');
  const publishedList = document.getElementById('published-list');
  const clearButton = document.getElementById('clear-btn');
  clearButton.addEventListener('click', clear);

  function getInfo() {
    const titleText = getTitle.value;
    const categoryText = getCategory.value;
    const contentText = getContent.value;
    let toRemove = null;

    if (!titleText || !categoryText || !contentText) {
      return;
    }

    const li = document.createElement('li');
    li.classList.add('rpost');
    const article = document.createElement('article');
    const title = document.createElement('h4');
    title.textContent = getTitle.value;

    const category = document.createElement('p');
    category.textContent = `Category: ${getCategory.value}`;

    const content = document.createElement('p');
    content.textContent = `Content: ${getContent.value}`;

    const editButton = document.createElement('button');
    editButton.classList.add('action-btn');
    editButton.classList.add('edit');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
      ul.removeChild(li);

      getTitle.value = titleText;
      getCategory.value = categoryText;
      getContent.value = contentText;
    });

    const approveButton = document.createElement('button');
    approveButton.classList.add('action-btn');
    approveButton.classList.add('approve');
    approveButton.textContent = 'Approve';
    approveButton.addEventListener('click', (event) => {
      toRemove = event.target.parentElement;
      toRemove.removeChild(editButton);
      toRemove.removeChild(approveButton);

      ul.removeChild(toRemove);
      publishedList.appendChild(toRemove);
    });

    article.appendChild(title);
    article.appendChild(category);
    article.appendChild(content);

    li.appendChild(article);
    li.appendChild(approveButton);
    li.appendChild(editButton);

    ul.appendChild(li);

    clearFields();
  }

  function clear() {
    while(publishedList.firstChild){
      publishedList.removeChild(publishedList.firstChild);
    }
  }

  function clearFields() {
    getTitle.value = '';
    getCategory.value = '';
    getContent.value = '';
  }
}
