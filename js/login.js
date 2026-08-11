/* ================= LOGIN ================= */

/* ================= LOGIN ================= */

function login() {

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    // Demo account
    const demoUsername = "admin";
    const demoPassword = "admin123";

    if (username === "" || password === "") {

        message.style.color = "#ff8b8b";
        message.textContent = "Please enter your username and password.";
        return;

    }

    if (username === demoUsername && password === demoPassword) {

        localStorage.setItem("loggedIn", "true");

        message.style.color = "#7CFC00";
        message.textContent = "Login Successful!";

        setTimeout(function () {

            window.location.href = "index.html";

        }, 800);

    }

    else {

        message.style.color = "#ff8b8b";
        message.textContent = "Invalid username or password.";

    }

}

/* ================= SHOW PASSWORD ================= */

function togglePassword(){

    const password = document.getElementById("password");

    const icon = document.querySelector(".toggle-password");

    if(password.type === "password"){

        password.type = "text";

        icon.textContent = "visibility_off";

    }

    else{

        password.type = "password";

        icon.textContent = "visibility";

    }

}

document.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {

        login();

    }

});