function solve(input) {
    const resultObj = {};
    for (let i = 0; i < input.length - 1; i += 2) {
        let productName = input[i];
        let productCalories = Number(input[i + 1]);
        resultObj[productName] = productCalories;
    }

    console.log(resultObj);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);