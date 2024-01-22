function performLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var login = {
        username: username,
        password: password
    };

    if (login.username === "admin" && login.password === "123") {
        document.getElementById("login-message").innerText = "Welcome!";
    } else {
        document.getElementById("login-message").innerText = "Not registered.";
    }
}

function CreateAccount() {
    alert("Redirect to create account page");
}
