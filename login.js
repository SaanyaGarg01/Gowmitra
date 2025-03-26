// Select Elements
let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");
let messageBox = document.getElementById("message-box");

// Slide Animation
signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});

// Login Function
function checkLogin() {
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    if (email && password) {
        messageBox.textContent = "Successfully Logged In!";
        messageBox.style.color = "white";
    } else {
        messageBox.textContent = "Please enter valid credentials.";
        messageBox.style.color = "red";
    }
}

// Signup Function
function checkSignup() {
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;
    let confirmPassword = document.getElementById("signup-confirm").value;

    if (email === "harihar@gmail.com" && password === "1234abcd" && password === confirmPassword) {
        messageBox.textContent = "Successfully Signed Up!";
        messageBox.style.color = "white";
    } else if (password !== confirmPassword) {
        messageBox.textContent = "Passwords do not match!";
        messageBox.style.color = "red";
    } else {
        messageBox.textContent = "Signup failed: Incorrect details.";
        messageBox.style.color = "red";
    }
}
