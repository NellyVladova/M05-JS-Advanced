function solve(arr){
    arr.sort(sortingByTwoCriteria);
    return arr.join('\n');
    function sortingByTwoCriteria(previous, next){
        if(previous.length === next.length){
            return previous.localeCompare(next);
        }
        return previous.length - next.length;
    }
}

console.log(solve(['alpha', 
'beta', 
'gamma']
));
console.log(solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
));
console.log(solve(['test', 
'Deny', 
'omen', 
'Default']
));
