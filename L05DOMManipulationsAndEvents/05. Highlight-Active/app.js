function focused() {
    Array.from(document.querySelectorAll('input'))
        .forEach(el => {
            el.addEventListener('focus', OnFocus);
            el.addEventListener('blur', onBlur);
        });

    function OnFocus(ev) {
        ev.target.parentElement.classList = 'focused';
    }

    function onBlur(ev) {
        ev.target.parentElement.classList = '';
    }
}