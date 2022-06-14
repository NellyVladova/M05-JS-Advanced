function solve(input, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let allTickets = [];
    input.forEach(el => {
        [destination, price, status] = el.split('|');
        let ticket = new Ticket(destination, Number(price), status);
        allTickets.push(ticket);
    });

    allTickets.sort((el1, el2) => {
        if (criteria == "destination") {
            return el1.destination.localeCompare(el2.destination);
        } else if (criteria == "price") {
            return el1.price - el2.price;
        } else if (criteria == "status") {
            return el1.status.localeCompare(el2.status);
        }
    });

    return allTickets;
}

console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
));

console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'
));