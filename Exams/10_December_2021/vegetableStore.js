class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        let result = [];
        vegetables.forEach(el => {
            let [type, quantity, price] = el.split(' ');
            quantity = Number(quantity);
            price = Number(price);
            const existingVegetable = this.availableProducts.find(el => el.type == type);
            if (existingVegetable) {
                existingVegetable.quantity += quantity;
                if (existingVegetable.price < price) {
                    existingVegetable.price = price;
                }
            } else {
                const newVegetable = {
                    type,
                    quantity,
                    price
                };
                this.availableProducts.push(newVegetable);
                result.push(type);
            }
        });

        return `Successfully added ${result.join(', ')}`;
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0.00;
        selectedProducts.forEach(el => {
            let [type, quantity] = el.split(' ');
            const wantedVegetable = this.availableProducts.find(el => el.type == type);
            if (!wantedVegetable) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            } else if (wantedVegetable.quantity < quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            } else {
                let newPrice = wantedVegetable.price * quantity;
                wantedVegetable.quantity -= quantity;
                totalPrice += newPrice;
            }
        });

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    rottingVegetable(type, quantity) {
        let wantedVegetable = this.availableProducts.find(el => el.type == type);
        if (!wantedVegetable) {
            throw new Error(`${type} is not available in the store.`);
        }
        if (quantity > wantedVegetable.quantity) {
            wantedVegetable.quantity = 0;

            return `The entire quantity of the ${type} has been removed.`;
        } else {
            wantedVegetable.quantity -= quantity;
            return `Some quantity of the ${type} has been removed.`;
        }
    }

    revision() {
        let result = [];
        result.push('Available vegetables:');
        let sortedVegetables = this.availableProducts.sort((el1, el2) => el1.price - el2.price);
        sortedVegetables.forEach(el => result.push(`${el.type}-${el.quantity}-$${el.price}`));
        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);

        return result.join('\n');
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());


