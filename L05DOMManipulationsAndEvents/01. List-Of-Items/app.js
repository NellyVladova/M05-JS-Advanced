function addItem() {
    let input = document.getElementById('newItemText');
    let addText = input.value;
    let liElement = document.createElement('li');

    liElement.textContent = addText;
    document.getElementById('items').appendChild(liElement);
    input.value = '';
}