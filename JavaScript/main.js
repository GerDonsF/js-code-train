function calculator() {
    let num1 = parseFloat(prompt("Введіть перше число:"));
    let operator = prompt("Введіть оператор (+, -, *, /):");
    let num2 = parseFloat(prompt("Введіть друге число:"));

    let result;
    switch (operator) {
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
            result = num2 !== 0 ? num1 / num2 : "Помилка! Ділення на нуль.";
            break;
        default:
            result = "Некоректний оператор!";
    }

    alert("Результат: " + result);
}

calculator();
