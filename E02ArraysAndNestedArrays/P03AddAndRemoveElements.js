function solve(arr) {
    let result = [];
    let number = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'remove') {
            result.pop();
        }else if(arr[i] == 'add'){
            result.push(number);
        }
        number++;
    }
    if (result.length === 0) {
        console.log('Empty')
    } else {
        result.forEach(element => {
            console.log(element);
        });
    }
}

solve(['add', 
'add', 
'add', 
'add']
);
solve(['add', 
'add', 
'remove', 
'add', 
'add']
);
solve(['remove', 
'remove', 
'remove']
);

