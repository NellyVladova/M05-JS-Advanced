function solve(input) {
    let carsList = {};
    input.forEach(el => {
        let [brand, model, producedCars] = el.split(' | ');
        producedCars = Number(producedCars);
        if (!carsList[brand] == true) {
            carsList[brand] = {};
        }
        if (!carsList[brand][model] == true) {
            carsList[brand][model] = 0;
        }
        carsList[brand][model] += producedCars;
    });

    console.log(Object.entries(carsList).map(([brand, model]) => {
        return brand + '\n'
            + Object.entries(model)
                .map(([model, quantity]) => `###${model} -> ${quantity}`)
                .join('\n')})
        .join('\n'));
}

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);