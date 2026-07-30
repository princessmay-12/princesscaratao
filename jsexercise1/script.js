function calculate() {

    let firstNumber = Number(document.getElementById("num1").value);
    let secondNumber = Number(document.getElementById("num2").value);

    if (document.getElementById("num1").value === "" ||
        document.getElementById("num2").value === "") {
        alert("Please enter both numbers.");
        return;
    }

    document.getElementById("sum").innerHTML = firstNumber + secondNumber;
    document.getElementById("difference").innerHTML = firstNumber - secondNumber;
    document.getElementById("product").innerHTML = firstNumber * secondNumber;

    if (secondNumber == 0) {
        document.getElementById("quotient").innerHTML = "Cannot divide by zero";
    } else {
        document.getElementById("quotient").innerHTML = firstNumber / secondNumber;
    }
}

function clearFields() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";

    document.getElementById("sum").innerHTML = "";
    document.getElementById("difference").innerHTML = "";
    document.getElementById("product").innerHTML = "";
    document.getElementById("quotient").innerHTML = "";
}