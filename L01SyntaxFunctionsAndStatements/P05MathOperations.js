function calculate(num1, num2, symbol){
    let result;
    if(typeof num1 === "number" && typeof num2 === "number"){
        switch(symbol){
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num1 / num2;
                break;
            case "%":
                result  = num1 % num2;
                break;
            case "**":
                result = num1 ** num2;
                break;
        }
    }
    console.log(result);
}

calculate(5, 6, "+");
calculate(3, 5.5, '*');