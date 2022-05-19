function aggregate(array){
    let sum = 0;
    let inverseSum = 0;
    let concatResult = '';
 
    for(let i = 0; i < array.length; i++){
        let num = Number(array[i]);
        sum += num;
        inverseSum += 1 / num;
        concatResult += array[i];
    }
    console.log(sum);
    console.log(inverseSum);
    console.log(concatResult);
}

aggregate([1, 2, 3]);
aggregate([2, 4, 8, 16]);