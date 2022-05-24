function solve(arr){
    arr.sort((a, b) => a - b);
    let result = [];
    let length = arr.length;
    for(let i = 0; i < length; i++){
        result.push(arr.shift());
        result.push(arr.pop());
    }
    result = result.filter(x => x !== undefined);
    
    return result;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));