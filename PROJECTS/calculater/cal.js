function calculator() {
    let num1 = parseFloat(prompt("Enter first number:"));
    let num2 = parseFloat(prompt("Enter second number:"));
    let operation = prompt("Enter the operator:  (+),(-),(*),(/)");
    let result;

    switch (operation) {
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
        default:
            alert("Invalid operation");
            return;
    }

    alert("Result: " + Math.round(result * 100) / 100);
}

calculator();
