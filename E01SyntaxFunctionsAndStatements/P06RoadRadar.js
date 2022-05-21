function solve(speed, area) {
    const motorwayLimit = 130;
    const interstateLimit = 90;
    const cityLimit = 50;
    const residentialLimit = 20;
    let result;
    let difference;
    let status;

    switch (area) {
        case 'motorway':
            if (speed <= motorwayLimit) {
                result = `Driving ${speed} km/h in a ${motorwayLimit} zone`;
            } else {
                difference = speed - motorwayLimit;
                if (difference <= 20) {
                    status = 'speeding';
                } else if (difference <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                result = `The speed is ${difference} km/h faster than the allowed speed of ${motorwayLimit} - ${status}`;
            }
            break;
        case 'interstate':
            if (speed <= interstateLimit) {
                result = `Driving ${speed} km/h in a ${interstateLimit} zone`;
            } else {
                difference = speed - interstateLimit;
                if (difference <= 20) {
                    status = 'speeding';
                } else if (difference <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                result = `The speed is ${difference} km/h faster than the allowed speed of ${interstateLimit} - ${status}`;
            }
            break;
        case 'city':
            if (speed <= cityLimit) {
                result = `Driving ${speed} km/h in a ${cityLimit} zone`;
            } else {
                difference = speed - cityLimit;
                if (difference <= 20) {
                    status = 'speeding';
                } else if (difference <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                result = `The speed is ${difference} km/h faster than the allowed speed of ${cityLimit} - ${status}`;
            }
            break;
        case 'residential':
            if (speed <= residentialLimit) {
                result = `Driving ${speed} km/h in a ${residentialLimit} zone`;
            } else {
                difference = speed - residentialLimit;
                if (difference <= 20) {
                    status = 'speeding';
                } else if (difference <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                result = `The speed is ${difference} km/h faster than the allowed speed of ${residentialLimit} - ${status}`;
            }
            break;
    }

    console.log(result);
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');