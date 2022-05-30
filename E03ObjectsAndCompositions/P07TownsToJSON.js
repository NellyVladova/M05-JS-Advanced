function solve(input) {
    const result = [];

    for (let i = 1; i < input.length; i++) {
        let parts = input[i].split('|').map(el => el.trim());
        let town = parts[1];
        let latitude = Number(parts[2]).toFixed(2);
        let longitude = Number(parts[3]).toFixed(2);
        const currObj = {
            Town: town,
            Latitude: Number(latitude),
            Longitude: Number(longitude)
        };
        result.push(currObj);
    }
    console.log(JSON.stringify(result));
}

solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);

solve(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']
);

