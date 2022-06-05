function validate() {
    document.getElementById('email').addEventListener('change', changeColor);

    function changeColor(ev) {
        const regex = new RegExp('^[a-z]+@[a-z]+\.[a-z]+$');

        if (regex.test(ev.target.value)) {
            ev.target.classList.remove('error');
        } else {
            ev.target.classList.add('error');
        }
    }
}