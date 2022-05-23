function solve(arr){
    arr.sort((a, b) => a - b);
    let result = [];
    if(arr.length % 2 == 0){
        for (let i = arr.length / 2; i < arr.length; i++) {
            result.push(arr[i]);
        }
    }else{
        for(let i = Math.round(arr.length / 2) - 1; i < arr.length; i++){
            result.push(arr[i]);
        }
    }
    return result;
}

//console.log(solve([4, 7, 2, 5]));
console.log(solve([3, 19, 14, 7, 2, 19, 6]));
// 2 3 6 7 14 19 19