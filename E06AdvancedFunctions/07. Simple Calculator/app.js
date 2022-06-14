function calculator() {
    let finalResult = { firstInput: "", secondInput: "", output: "" };

    function calculate(input1, input2, sign) {
        let actions = {
            "+": (num1, num2) => num1 + num2,
            "-": (num1, num2) => num1 - num2
        }

        return actions[sign](Number(input1), Number(input2));
    }

    return {
        init: (firstIn, secondIn, out) => {
            finalResult.firstInput = document.querySelector(firstIn);
            finalResult.secondInput = document.querySelector(secondIn);
            finalResult.output = document.querySelector(out);
        },
        add: () =>
            (finalResult.output.value = calculate(finalResult.firstInput.value, finalResult.secondInput.value, "+")),
        subtract: () =>
            (finalResult.output.value = calculate(finalResult.firstInput.value, finalResult.secondInput.value, "-")),
    };
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');



