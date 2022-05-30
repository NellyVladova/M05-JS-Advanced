function solve(input) {
    const resultObj = {
        model: input.model,
        engine: {},
        carriage: {},
        wheels: []
    };

    const engine = {
        small: {
            power: 90, volume: 1800
        },
        normal: {
            power: 120, volume: 2400
        },
        monster: {
            power: 200, volume: 3500
        }
    };
    const carriage = {
        hatchback: {
            type: 'hatchback', color: input.color
        },
        coupe: {
            type: 'coupe', color: input.color
        }
    };

    if (input.power <= 90) {
        resultObj.engine = engine.small;
    } else if (input.power <= 120) {
        resultObj.engine = engine.normal;
    } else if (input.power <= 200) {
        resultObj.engine = engine.monster;
    }

    if (input.carriage == 'hatchback') {
        resultObj.carriage = carriage.hatchback;
    } else if (input.carriage == 'coupe') {
        resultObj.carriage = carriage.coupe;
    }

    let size = Number(input.wheelsize);
    if (input.wheelsize % 2 == 0) {
        size--;
    }
    resultObj.wheels = [size, size, size, size];

    return resultObj;
}

console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
));

console.log(solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
));
