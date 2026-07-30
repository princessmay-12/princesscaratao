let numbers = [];

function insertNumber() {

    let value = document.getElementById("number").value;

    if (value == "") {
        alert("Please enter a number.");
        return;
    }

    value = Number(value);
    numbers.push(value);

    document.getElementById("numbers").innerHTML = numbers.join("<br>");

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    document.getElementById("sum").innerHTML = sum;
    document.getElementById("highest").innerHTML = Math.max(...numbers);
    document.getElementById("lowest").innerHTML = Math.min(...numbers);

    document.getElementById("number").value = "";
}

function deleteAll() {

    numbers = [];

    document.getElementById("number").value = "";
    document.getElementById("numbers").innerHTML = "";
    document.getElementById("sum").innerHTML = "";
    document.getElementById("highest").innerHTML = "";
    document.getElementById("lowest").innerHTML = "";
}