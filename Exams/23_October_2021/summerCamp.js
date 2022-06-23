class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp[condition]) {
            throw new Error("Unsuccessful registration at the camp.");
        }
        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        const existingParticipant = this.listOfParticipants.find(el => el.name == name);
        if (existingParticipant) {
            return `The ${name} is already registered at the camp.`;
        }
        let newParticipant = {
            name,
            condition,
            power: 100,
            wins: 0
        }
        this.listOfParticipants.push(newParticipant);

        return `The ${name} was successfully registered.`;

    }

    unregisterParticipant(name) {
        const wantedName = this.listOfParticipants.find(el => el.name == name);
        if (!wantedName) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }
        this.listOfParticipants = this.listOfParticipants.filter(x => x.name != name);
        
        return `The ${name} removed successfully.`;
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        let findFirstParticipant = this.listOfParticipants.find(el => el.name == participant1);;

        if (!findFirstParticipant) {
            throw new Error('Invalid entered name/s.');
        }
        if (typeOfGame == 'Battleship') {
            findFirstParticipant.power += 20;

            return `The ${findFirstParticipant.name} successfully completed the game ${typeOfGame}.`;
        } else if (typeOfGame == 'WaterBalloonFights') {
            let findSecondParticipant = this.listOfParticipants.find(el => el.name == participant2);
            let winnerName = '';

            if (!findSecondParticipant) {
                throw new Error('Invalid entered name/s.');
            }

            if (findFirstParticipant.condition != findSecondParticipant.condition) {
                throw new Error('Choose players with equal condition.');
            }

            if (findFirstParticipant.power > findSecondParticipant.power) {
                findFirstParticipant.wins++;
                winnerName = findFirstParticipant.name;
            } else if (findFirstParticipant.power < findSecondParticipant.power) {
                findSecondParticipant.wins++;
                winnerName = findSecondParticipant.name;
            } else {
                return 'There is no winner.';
            }

            return `The ${winnerName} is winner in the game ${typeOfGame}.`;
        }
    }
    toString() {
        let result = [];
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);
        this.listOfParticipants.sort((el1, el2) => el2.wins - el1.wins)
            .forEach(el => {
                result.push(`${el.name} - ${el.condition} - ${el.power} - ${el.wins}`)
            });

        return result.join('\n');
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());



