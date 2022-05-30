function solve(input) {
    function replaceEntity(text) {
        const htmlEntities = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            '\'': '&#39;'
        };
        return String(text).replace(/([&<>\"'])/g, match => htmlEntities[match]);
    }

    const objects = JSON.parse(input);
    let tr = {td: []};

    for (const currObj of objects) {
        if (!tr.th) {
            tr.th = Object.keys(currObj).map(replaceEntity);
        }
        tr.td.push(Object.values(currObj).map(replaceEntity));
    }

    console.log('<table>');
    console.log(`<tr><th>${tr.th.join('</th><th>')}</th></tr>`);
    tr.td.forEach(value => console.log(`<tr><td>${value.join('</td><td>')}</td></tr>`));
    console.log('</table>');
}

solve(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`);
