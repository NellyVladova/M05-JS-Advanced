function addItem() {
    let newLi = document.createElement('li');
    let addText = document.getElementById('newItemText').value;
    let listWithItems = document.getElementById('items');

    newLi.appendChild(document.createTextNode(addText));
    listWithItems.appendChild(newLi);
}