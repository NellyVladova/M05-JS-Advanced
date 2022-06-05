function generateReport() {
    let selectedColumns = Array.from(document.querySelectorAll('thead tr th input'));
    let rows = Array.from(document.querySelectorAll('tbody tr'));
    let output = document.querySelector('#output');
    const result = [];

    rows.forEach(row => {
        let obj = {};
        Array.from(row.querySelectorAll('td')).forEach((colName, checkBox) =>{
            if(selectedColumns[checkBox].checked){
                obj[selectedColumns[checkBox].name] = colName.textContent;
            }
        });
        result.push(obj);
    });
    output.value = JSON.stringify(result);
}