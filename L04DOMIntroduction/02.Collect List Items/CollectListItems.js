function extractText() {
    const list = document.getElementById('items');
    const area = document.getElementById('result');
    area.textContent = list.textContent;
}

