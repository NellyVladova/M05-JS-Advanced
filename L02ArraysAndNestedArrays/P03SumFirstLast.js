function solve(input){
    return Number(input.shift()) + Number(input.pop());
}

console.log(solve(['20', '30', '40']));
console.log(solve(['5', '10']));