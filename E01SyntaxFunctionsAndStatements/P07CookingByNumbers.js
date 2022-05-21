function solve(number, ...commands){
    number = Number(number);
    const array = Array(...commands);
    let currCommand;

    for(let i = 0; i < array.length; i++){
        currCommand = array[i];
        switch(currCommand){
            case 'chop':
                number/=2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number++;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number = (number * 0.8).toFixed(1);
        }
        console.log(number);
    }  
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');