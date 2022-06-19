function solve(input) {
    let juices = {};
    let producedBottles = {};
    input.forEach(el => {
        let [name, quantity] = el.split(' => ');
        if (!juices[name] == true) {
            juices[name] = Number(quantity);
        } else {
            juices[name] += Number(quantity);
        }
        while (juices[name] >= 1000) {
            let count = 0;
            if (!producedBottles[name] == true) {
                count++;
                producedBottles[name] = Number(count);
            } else {
                count++;
                producedBottles[name] += Number(count);
            }
            juices[name] -= 1000;
        }
    });

    for (const property in producedBottles) {
        console.log(`${property} => ${producedBottles[property]}`);
    }
}

solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
);
solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
);