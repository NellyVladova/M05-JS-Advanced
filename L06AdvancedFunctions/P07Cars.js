function solve(input) {
    //??????????????????
    let result = {};

    let carFunctionalities = {
        create: (name, inherits, parentName) => (result[name] = inherits ? Object.create(result[parentName]) : {}),
        set: (name, key, value) => (result[name][key] = value),
        print: name => {
            let output = [];
            for (const key of result[name]) {
                output.push(`${key}:${result[name][key]}`)
            }
            console.log(output.join(', '));
        }
    };

    input.forEach(el => {
        let [car, name, key, value] = el.split(" ");
        carFunctionalities[car](name, key, value);
    });
}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);
