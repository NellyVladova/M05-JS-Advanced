function solve(...args){
    let input = Array.from(args);
    let argumentTypeList = new Map();

    input.forEach(el => {
        let type = typeof(el);
        console.log(`${type}: ${el}`);

        if(argumentTypeList.has(type)){
            argumentTypeList.set(type, argumentTypeList.get(type) + 1);
        }else{
            argumentTypeList.set(type, 1);
        }
    });
    Array.from(argumentTypeList.entries()).sort((el1, el2) => el2[1] - el1[1]).forEach(el => console.log(`${el[0]} = ${el[1]}`));
}

solve('cat', 42, function () { console.log('Hello world!'); });