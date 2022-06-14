function solution(){
    const recipes = {
        apple: recipeData(0, 1, 0, 2),
        lemonade: recipeData(0, 10, 0, 20),
        burger: recipeData(0, 5, 7, 3),
        eggs: recipeData(5, 0, 1, 1),
        turkey: recipeData(10, 10, 10, 10),
    };
    const ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };

    function recipeData(protein, carbohydrate, fat, flavour) {
        return {
            protein,
            carbohydrate,
            fat,
            flavour,
        };
    }

    function restock(microelement, quantity) {
        ingredients[microelement] += quantity
        return "Success";
    }

    function prepare(recipe, quantity) {
        let neededIngredients = Object.entries(recipe).map(el => [
            el[0],
            el[1] * quantity,
        ])

        for (let i = 0; i < neededIngredients.length; i++) {
            const [name, amount] = neededIngredients[i]
            if (ingredients[name] - amount < 0) {
                return `Error: not enough ${name} in stock`;
            }
        }

        neededIngredients.forEach(([name, amount]) => (ingredients[name] -= amount))
        return "Success";
    }

    let report = () =>
        Object.entries(ingredients)
            .map(([key, value]) => `${key}=${value}`)
            .join(" ");

    let actions = {
        restock,
        prepare: (r, q) => prepare(recipes[r], q),
        report,
    }

    return s => {
        const [command, a, b] = s.split(" ").map(el => (isNaN(el) ? el : Number(el)));

        return actions[command](a, b);
    }
}

let manager = solution (); 
console.log (manager ("restock flavour 50")); // Success 
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
