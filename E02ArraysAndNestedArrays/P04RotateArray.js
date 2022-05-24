function solve(arr, rotateNum) {
    for (let i = 0; i < rotateNum; i++) {
        let toRotate = arr.pop();
        arr.unshift(toRotate);
    }
    return arr.join(' ');
}

console.log(solve(['1',
    '2',
    '3',
    '4'],
    2
));
console.log(solve(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15
));