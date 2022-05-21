function solve(x1, y1, x2, y2){
    let message = '';
    const isValid = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    const isValidForFirst = Math.sqrt(Math.pow(0 - x1, 2) + Math.pow(0 - y1, 2));
    const isValidForSecond = Math.sqrt(Math.pow(0 - x2, 2) + Math.pow(0 - y2, 2));
    if (isValidForFirst % 1 === 0) {
        message = '{' + x1 + ', ' + y1 + '} to {0, 0} is valid'
        console.log(message);
    } else {
        message = '{' + x1 + ', ' + y1 + '} to {0, 0} is invalid'
        console.log(message);
    }
    if (isValidForSecond % 1 === 0) {
        message = '{' + x2 + ', ' + y2 + '} to {0, 0} is valid'
        console.log(message);
    } else {
        message = '{' + x2 + ', ' + y2 + '} to {0, 0} is invalid'
        console.log(message);
    }
    if (isValid % 1 === 0) {
        message = '{' + x1 + ', ' + y1 + '} to ' + '{' + x2 + ', ' + y2 + '} is valid'
        console.log(message);
    } else {
        message = '{' + x1 + ', ' + y1 + '} to ' + '{' + x2 + ', ' + y2 + '} is invalid'
        console.log(message);
    }
}

solve(3, 0, 0, 4);
solve(2, 1, 1, 1);