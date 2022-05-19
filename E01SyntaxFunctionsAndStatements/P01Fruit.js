function fruitPrice(fruitType, weight, pricePerKg){
    let weightInKg = weight / 1000;
    let money = weightInKg * pricePerKg;

    console.log(`I need $${money.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruitType}.`);
}

fruitPrice('orange', 2500, 1.80);
fruitPrice('apple', 1563, 2.35);