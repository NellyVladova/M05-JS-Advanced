class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        if (this.goals[peak]) {
            return `${peak} has already been added to your goals`;
        } else {
            this.goals[peak] = altitude;
            return `You have successfully added a new goal - ${peak}`;
        }
    }

    hike(peak, time, difficultyLevel) {
        if (!this.goals[peak]) {
            throw new Error(`${peak} is not in your current goals`);
        } else {
            if (this.resources == 0) {
                throw new Error("You don't have enough resources to start the hike");
            }
            let difference = this.resources - (time * 10);
            if (difference < 0) {
                return "You don't have enough resources to complete the hike";
            }
            this.resources = difference;
            const newHike = {
                peak,
                time,
                difficultyLevel
            }
            this.listOfHikes.push(newHike);

            return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
        }
    }

    rest(time) {
        this.resources += (time * 10);
        if (this.resources >= 100) {
            this.resources = 100

            return `Your resources are fully recharged. Time for hiking!`;
        } else {
            return `You have rested for ${time} hours and gained ${time * 10}% resources`;
        }
    }

    showRecord(criteria) {
        if (this.listOfHikes.length == 0) {
            return `${this.username} has not done any hiking yet`;
        }
        let sortedHikes = [];
        let bestHike = {};
        if (criteria == 'hard') {
            this.listOfHikes.forEach(el => {
                if (el.difficultyLevel == 'hard') {
                    sortedHikes.push(el);
                }
            });
            sortedHikes.sort((el1, el2) => el1.time - el2.time);
            bestHike = sortedHikes[0];
        } else if (criteria == 'easy') {
            this.listOfHikes.forEach(el => {
                if (el.difficultyLevel == 'easy') {
                    sortedHikes.push(el);
                }
            });
            sortedHikes.sort((el1, el2) => el1.time - el2.time);
            bestHike = sortedHikes[0];
        }
        if(sortedHikes.length == 0 && (criteria == 'hard' || criteria == 'easy')){
            return `${this.username} has not done any ${criteria} hiking yet`;
        }
        if (criteria == 'all') {
            let result = [];
            const firstLine = 'All hiking records:';
            result.push(firstLine);
            for (const hike of this.listOfHikes) {
                let output = `${this.username} hiked ${hike.peak} for ${hike.time} hours`;
                result.push(output);
            }
            return result.join('\n');
        }
        return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`;
    }
}

//Input 1
/*const user = new SmartHike('Vili');
console.log(user.addGoal('Musala', 2925));
console.log(user.addGoal('Rui', 1706));
console.log(user.addGoal('Musala', 2925));*/

//Input 2
/*const user = new SmartHike('Vili');
console.log(user.addGoal('Musala', 2925));
console.log(user.addGoal('Rui', 1706));
console.log(user.hike('Musala', 8, 'hard'));
console.log(user.hike('Rui', 3, 'easy'));
console.log(user.hike('Everest', 12, 'hard'));*/

//Input 3
/*const user = new SmartHike('Vili');
console.log(user.addGoal('Musala', 2925));
console.log(user.hike('Musala', 8, 'hard'));
console.log(user.rest(4));
console.log(user.rest(5));*/

//Input 4
/*const user = new SmartHike('Vili');
console.log(user.showRecord('all'));*/

//Input 5
const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));
