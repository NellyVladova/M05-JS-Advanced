function solve(input){
    let output = input.toUpperCase().match(/\w+/g).join(', ');

    console.log(output);
}

solve('Hi, how are you?');
solve('hello');