function add(num){
    let result = function calculateSum(numToAdd){
        num += numToAdd;
        return result;
    }
    result.toString = function () {
        return num;
    }

    return result;
}

console.log(add(1).toString());
console.log(add(1)(6)(-3).toString());