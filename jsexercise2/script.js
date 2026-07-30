function generateFullName() {

    let firstName = document.getElementById("fname").value;
    let middleName = document.getElementById("mname").value;
    let lastName = document.getElementById("lname").value;

    if (firstName == "" || middleName == "" || lastName == "") {
        alert("Please enter your first, middle, and last name.");
        return;
    }

    let fullName = firstName + " " + middleName + " " + lastName;

    document.getElementById("fullname").innerHTML = fullName;
}

function clearEntries() {

    document.getElementById("fname").value = "";
    document.getElementById("mname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("fullname").innerHTML = "";
}