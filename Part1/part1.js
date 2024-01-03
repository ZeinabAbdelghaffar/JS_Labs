function checkLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === "admin" && password === "421$$") {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('welcomeMessage').style.display = 'block';
    } else {
        var errorMessage = "Incorrect ";
        if (username !== "admin") {
            errorMessage += "username";
        }
        if (username !== "admin" && password !== "421$$") {
            errorMessage += " and ";
        }
        if (password !== "421$$") {
            errorMessage += "password";
        }
        alert(errorMessage);
    }
}

function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var operation = document.getElementById('operation').value;
    var num2 = parseFloat(document.getElementById('num2').value);
    var result;
    switch (operation) {
        case 'sum':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                alert("Cannot divide by zero");
                return;
            }
            break;
        case 'modulo':
            if (num2 !== 0) {
                result = num1 % num2;
            } else {
                alert("Cannot calculate modulo by zero");
                return;
            }
            break;
        default:
            alert("Invalid operation");
            return;
    }
    alert("Result: " + result);
}

var result = 0;
function calculate() {
    var num1 = result || parseFloat(document.getElementById('num1').value);
    var operation = document.getElementById('operation').value;
    var num2 = parseFloat(document.getElementById('num2').value);
    switch (operation) {
        case 'sum':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                alert("Cannot divide by zero");
                return;
            }
            break;
        case 'modulo':
            if (num2 !== 0) {
                result = num1 % num2;
            } else {
                alert("Cannot calculate modulo by zero");
                return;
            }
            break;
        default:
            alert("Invalid operation");
            return;
    }
    alert("Result: " + result);
    document.getElementById('num1').value = result;
}
