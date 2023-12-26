function confirm() {
    var fn = document.getElementById("firstName").value;
    var ln = document.getElementById("lastName").value;
    var fulln = fn + " " + ln;
    var confirmMsg = "Your full name is: " + fulln;
    alert(confirmMsg);
}

function welcomeUser() {
    var fn = document.getElementById("firstName").value;
    var ln = document.getElementById("lastName").value;
    var year = document.getElementById("birthYear").value;
    var fulln = fn + " " + ln;
    var age = new Date().getFullYear() - year;
    var welcomeMsg = "Welcome " + fulln + " You are " + age + " years old.";
    document.getElementById("welcomeMessage").innerHTML = welcomeMsg;
    document.getElementById("welcomeMessage").style.display = "block";
}

function calculateSum() {
    var fnum = parseFloat(document.getElementById("firstNumber").value);
    var snum = parseFloat(document.getElementById("secondNumber").value);
    if (isNaN(fnum) || isNaN(snum)) {
        alert("Please enter valid numbers for both fields.");
        return;
    }
    var sum = fnum + snum;
    var sumMsg = fnum + " + " + snum + " = " + sum;
    document.getElementById("sumResult").innerHTML = sumMsg;
    document.getElementById("sumResult").style.display = "block";
}
