function solve(arr, criteria){
    let result = [];

    if(criteria == "asc"){
        result = ascending();
    }else if(criteria == "desc"){
        result = descending();
    }

    function ascending(){
        return arr.sort((el1, el2) => el1 - el2);
    }

    function descending(){
        return arr.sort((el1, el2) => el2 -el1);
    }

    return result;
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));
console.log(solve([14, 7, 17, 6, 8], 'desc'));

