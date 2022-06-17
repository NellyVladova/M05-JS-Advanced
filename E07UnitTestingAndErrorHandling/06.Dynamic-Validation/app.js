function validate() {
    const inputField = document.getElementById('email');

    inputField.addEventListener('change', () => {
        const pattern = /^[\w - \.]+\@[\w]+\.[\w]+/;
        if (inputField.value.match(pattern)) {
            inputField.classList.remove('error');
        } else {
            inputField.classList.add('error');
        }
    });
}