window.addEventListener('load', solve);

function solve() {
    const getGenre = document.getElementById('genre');
    const getName = document.getElementById('name');
    const getAuthor = document.getElementById('author');
    const getDate = document.getElementById('date');
    const addButton = document.getElementById('add-btn');
    addButton.addEventListener('click', add);

    let likesCount = 0;
    const collectionOfSongs = document.querySelector('.all-hits-container');
    const savedSongs = document.querySelector('.saved-container');
    const totalLikes = document.querySelector('div.likes p');

    function add(event) {
        event.preventDefault();

        const genreValue = getGenre.value;
        const nameValue = getName.value;
        const authorValue = getAuthor.value;
        const dateValue = getDate.value;

        if (!genreValue || !nameValue || !authorValue || !dateValue) {
            return;
        }

        const div = document.createElement('div');
        div.classList.add('hits-info');

        const img = document.createElement('img');
        const genreH2 = document.createElement('h2');
        const nameH2 = document.createElement('h2');
        const authorH2 = document.createElement('h2');
        const dateH3 = document.createElement('h3');
        const saveButton = document.createElement('button');
        const likeButton = document.createElement('button');
        const deleteButton = document.createElement('button');

        img.src = './static/img/img.png';

        saveButton.classList.add('save-btn');
        likeButton.classList.add('like-btn');
        deleteButton.classList.add('delete-btn');

        genreH2.textContent = `Genre: ${genreValue}`;
        nameH2.textContent = `Name: ${nameValue}`;
        authorH2.textContent = `Author: ${authorValue}`;
        dateH3.textContent = `Date: ${dateValue}`;
        saveButton.textContent = 'Save song';
        likeButton.textContent = 'Like song';
        deleteButton.textContent = 'Delete';

        saveButton.addEventListener('click', save);
        likeButton.addEventListener('click', like);
        deleteButton.addEventListener('click', onDelete);

        function save() {
            div.removeChild(saveButton);
            div.removeChild(likeButton);
            savedSongs.appendChild(div);
        }
        function like() {
            likesCount++;
            totalLikes.textContent = `Total Likes: ${likesCount}`;
            likeButton.disabled = true;
        }
        function onDelete(ev) {
            ev.target.parentElement.parentElement.removeChild(div);
        }

        div.appendChild(img);
        div.appendChild(genreH2);
        div.appendChild(nameH2);
        div.appendChild(authorH2);
        div.appendChild(dateH3);
        div.appendChild(saveButton);
        div.appendChild(likeButton);
        div.appendChild(deleteButton);

        collectionOfSongs.appendChild(div);

        getGenre.value = '';
        getName.value = '';
        getAuthor.value = '';
        getDate.value = '';
    }
}