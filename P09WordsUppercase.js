function solve(input) {
    let output = input.toUpperCase().match(/\w+/g).join(', ');

    return output;
}

solve('Hi, how are you?');
solve('hello');