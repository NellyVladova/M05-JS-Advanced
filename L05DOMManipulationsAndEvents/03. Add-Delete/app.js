function addItem() {
    let input = document.getElementById('newItemText');
    let addText = input.value;
    let liElement = document.createElement('li');

    liElement.textContent = addText;

    const deleteButton = document.createElement('a');
    deleteButton.textContent = '[Delete]';
    deleteButton.href = '#';
    liElement.appendChild(deleteButton);
    deleteButton.addEventListener('click', onDelete)

    document.getElementById('items').appendChild(liElement);
    input.value = '';

    function onDelete(event){
        event.target.parentElement.remove();
    }
}