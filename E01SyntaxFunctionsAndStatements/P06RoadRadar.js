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
            speedLimit = motorwayLimit;
            break;
        case 'interstate':
            speedLimit = interstateLimit;
            break;
        case 'city':
            speedLimit = cityLimit;
            break;
        case 'residential':
            speedLimit = residentialLimit;
            break;
    }
    if (speed <= speedLimit) {
        result = `Driving ${speed} km/h in a ${speedLimit} zone`;
    } else {
        difference = speed - speedLimit;
        if (difference <= 20) {
            status = 'speeding';
        } else if (difference <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        result = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`;
    }

    console.log(result);
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');
