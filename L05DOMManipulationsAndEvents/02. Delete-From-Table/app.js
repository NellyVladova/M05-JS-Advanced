function deleteByEmail() {
    let inputValue = document.getElementsByName('email')[0].value;
    let rows = Array.from(document.querySelectorAll('tbody tr'));
    let result = '';
    let found = false;

    for (let row of rows) {
        if (row.children[1].textContent == inputValue) {
            let parent = row.parentElement;
            parent.removeChild(row);
            found = true;
        }
    }
    if (found) {
        document.getElementById('result').textContent = 'Deleted.';
    } else {
        document.getElementById('result').textContent = 'Not found.';
    }
}