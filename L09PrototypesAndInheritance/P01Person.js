function createPerson(firstName, lastName){
    let newPerson = {
        firstName,
        lastName, 
        fullName: firstName + ' ' + lastName
    }
    Object.defineProperty(newPerson, 'fullName', {
        get(){
            return this.firstName + ' ' + this.lastName;
        },
        set(input) {
            let [first, last] = input.split(' ');
            if(first != undefined && last != undefined){
                this.firstName = first;
                this.lastName = last;
            }
        }
    });

    return newPerson;
}


let firstPerson = createPerson("Peter", "Ivanov");
console.log(firstPerson.fullName); //Peter Ivanov
firstPerson.firstName = "George";
console.log(firstPerson.fullName); //George Ivanov
firstPerson.lastName = "Peterson";
console.log(firstPerson.fullName); //George Peterson
firstPerson.fullName = "Nikola Tesla";
console.log(firstPerson.firstName); //Nikola
console.log(firstPerson.lastName); //Tesla

let secondPerson = createPerson("Albert", "Simpson");
console.log(secondPerson.fullName); //Albert Simpson
secondPerson.firstName = "Simon";
console.log(secondPerson.fullName); //Simon Simpson
secondPerson.fullName = "Peter";
console.log(secondPerson.firstName);  // Simon
console.log(secondPerson.lastName);  // Simpson

