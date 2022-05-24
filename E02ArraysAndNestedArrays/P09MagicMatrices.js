function solve(matrix){
    let isMagic = true;
    for(let i = 0; i < matrix.length - 1; i++){
        let sumOfFirstRow = matrix[i].reduce((a, b) => a + b, 0);
        let sumOfSecondRow = matrix[i + 1].reduce((a, b) => a + b, 0);
        let sumOfFirstCol = 0;
        let sumOfSecondCol = 0;

        for(let j = 0; j < matrix.length; j++){
            sumOfFirstCol += matrix[i][j];
            sumOfSecondCol += matrix[i + 1][j];
        }

        if(sumOfFirstRow !== sumOfSecondRow || sumOfFirstCol !== sumOfSecondCol){
            isMagic = false;
        }
    }
    return isMagic;
}

console.log(solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   ));

console.log(solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   ));

console.log(solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   ));