class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error('Not enough space in the garden.');
        } else {
            this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });
            this.spaceAvailable -= spaceRequired;
            return `The ${plantName} has been successfully planted in the garden.`
        }
    }

    ripenPlant(plantName, quantity) {
        const currPlant = this.plants.find(el => el.plantName == plantName);

        if (!currPlant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (currPlant.ripe) {
            throw new Error(`The ${plantName} is already ripe.`);
        }

        if (quantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.')
        }

        currPlant.ripe = true;
        currPlant.quantity += quantity;

        if (quantity == 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        } else if (quantity > 1) {
            return `${quantity} ${plantName}s have successfully ripened.`;
        }
    }

    harvestPlant(plantName){
        const plant = this.plants.find(el => el.plantName == plantName);
        if(!plant){
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if(!plant.ripe){
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }
        const plantIndex = this.plants.indexOf(plant);
        this.storage.push(`${plant.plantName} (${plant.quantity})`);
        this.plants.splice(plantIndex, 1);
        this.spaceAvailable += plant.spaceRequired;

        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport(){
        const result = [];
        result.push(`The garden has ${ this.spaceAvailable } free space left.`);
        const sortedPlants = this.plants.sort((el1, el2) => el1.plantName.localeCompare(el2.plantName));
        let sorted = [];
        sortedPlants.forEach(el => sorted.push(el.plantName));

        result.push(`Plants in the garden: ${sorted.join(', ')}`);
        if(this.storage.length ==0){
            result.push('Plants in storage: The storage is empty.');
        }else{
            result.push(`Plants in storage: ${this.storage.join(', ')}`);
        }

        return result.join('\n');
    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 100));
console.log(myGarden.addPlant('cucumber', 30));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.ripenPlant('orange', 4));


