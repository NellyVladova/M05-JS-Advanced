function solve(n, k) {
    let arr = [];
    arr.push(1);
    for (let i = 1; i < n; i++) {
        let numToAdd = 0;
        if (i == 1) {
            numToAdd = 1;
        } else {
            for (let j = k-1; j >= 0; j--) {
                let currNum = arr[(arr.length-1)-j];
                if(currNum === undefined){
                    currNum = 0;
                }
                numToAdd += currNum;
            }
        }
        arr.push(numToAdd);
    }
    return arr;
}

console.log(solve(6, 3));
console.log(solve(8, 2));