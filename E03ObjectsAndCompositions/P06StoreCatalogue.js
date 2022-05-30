function solve(input) {
    const catalogue = {};

    for(const el of input){
        let [productName, price] = el.split(' : ');
        const letter = productName[0];

        if(catalogue.hasOwnProperty(letter) == false){
            catalogue[letter] = {};
        }
        catalogue[letter][productName] = price;
    }
    let sortedLetters = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));
    for (const letter of sortedLetters) {
        console.log(letter);
        let sortedProducts = Object.keys(catalogue[letter]).sort((a, b) => a.localeCompare(b));
        
        for( const currProduct of sortedProducts){
            console.log(` ${currProduct}: ${catalogue[letter][currProduct]}`)
        }
    }
}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);

solve(['Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']
);