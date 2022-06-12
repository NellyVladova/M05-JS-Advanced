function solve(input) {
    let result = [];
    let commands = {
        add: el => result.push(el),
        remove: el => (result = result.filter(str => str !== el)),
        print: () => console.log(result.join(','))
    };
    for (const el of input) {
        let [command, value] = el.split(" ");
        commands[command](value);
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);