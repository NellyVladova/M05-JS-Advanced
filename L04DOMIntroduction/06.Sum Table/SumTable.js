function sumTable() {
    const rows = Array.from(document.querySelectorAll('tr')).slice(1, -1);
    let sum = 0;
    for(let currRow of rows){
        sum += Number(currRow.lastElementChild.textContent);
    }

    document.getElementById('sum').textContent = sum;
}