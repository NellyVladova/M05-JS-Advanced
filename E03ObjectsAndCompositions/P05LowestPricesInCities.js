function solve(input) {
    const resultObj = {};
    for (const el of input) {
        let currRow = el.split(' | ');
        let town = currRow[0];
        let product = currRow[1];
        let price = Number(currRow[2]);
        if (!resultObj[product]) {
            resultObj[product] = { 
                town, 
                price 
            };
        }else{
            if(price < resultObj[product].price){
                resultObj[product] = {town, price};
            }
        }
    }
    let allProducts = Object.keys(resultObj);
    for(let i = 0; i < allProducts.length; i++){
        let productName = allProducts[i];
        console.log(`${productName} -> ${resultObj[productName].price} (${resultObj[productName].town})`)
    }
}

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);