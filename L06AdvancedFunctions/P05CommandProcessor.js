function solution(){
    let result = '';
    function append(string){
        result += string;
    }
    function removeStart(num){
        result = result.substring(num);
    }
    function removeEnd(num){
        result = result.substring(0, result.length - num);
    }
    function print(){
        console.log(result);
    }

    return {
        append: append,
        removeStart: removeStart,
        removeEnd: removeEnd,
        print: print
    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();


let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();

