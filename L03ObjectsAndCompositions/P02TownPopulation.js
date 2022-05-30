function solve(input) {
    const result = {};

    for (const element of input) {
        const tokens = element.split(" <-> ");
        const name = tokens[0];
        let population = Number(tokens[1]);

        if (result[name] != undefined) {
            population += result[name];
        }
        result[name] = population;

    }

    for (const town in result) {
        console.log(`${town} : ${result[town]}`);
    }
}

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);

solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);