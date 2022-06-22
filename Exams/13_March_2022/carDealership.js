class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (model == '' || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error("Invalid input!");
        }
        const newCar = {
            model,
            horsepower,
            price,
            mileage
        };
        this.availableCars.push(newCar);

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {
        const wantedCar = this.availableCars.find(el => el.model == model);
        if (!wantedCar) {
            throw new Error(`${model} was not found!`);
        }
        let mileageDifference = wantedCar.mileage - desiredMileage;
        if (wantedCar.mileage <= desiredMileage) {
            wantedCar.price = wantedCar.price;
        } else if (mileageDifference <= 40000) {
            wantedCar.price -= wantedCar.price * 0.05;
        } else if (mileageDifference > 40000) {
            wantedCar.price -= wantedCar.price * 0.1;
        }
        const carIndex = this.availableCars.indexOf(wantedCar);
        this.availableCars.splice(carIndex, 1);
        this.soldCars.push({
            model: wantedCar.model,
            horsepower: wantedCar.horsepower,
            soldPrice: wantedCar.price
        });
        this.totalIncome += wantedCar.price;

        return `${model} was sold for ${wantedCar.price.toFixed(2)}$`;
    }

    currentCar() {
        if (!this.availableCars.length) {
            return 'There are no available cars';
        } else {
            let result = [];
            result.push('-Available cars:');
            this.availableCars.forEach(el => result.push(`---${el.model} - ${el.horsepower} HP - ${el.mileage.toFixed(2)} km - ${el.price.toFixed(2)}$`));
            return result.join('\n');
        }
    }

    salesReport(criteria) {
        let sortedCars = null;
        if (criteria == 'horsepower') {
            sortedCars = this.soldCars.sort((el1, el2) => el2.horsepower - el1.horsepower);
        } else if (criteria == 'model') {
            sortedCars = this.soldCars.sort((el1, el2) => el1.model.localeCompare(el2.model));
        } else {
            throw new Error('Invalid criteria!');
        }
        let result = [];
        result.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);
        result.push(`-${this.soldCars.length} cars sold:`);
        this.soldCars.forEach(el => result.push(`---${el.model} - ${el.horsepower} HP - ${el.soldPrice.toFixed(2)}$`));

        return result.join('\n');
    }
}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));

