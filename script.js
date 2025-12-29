function toggleMenu(){
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("show");

}


let nameError = document.getElementById("name-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");

let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

function validateName() {
    let name = document.getElementById("form-name").value.trim();

    if (name === "") {
        nameError.textContent = "*Name is required";
        return false;
    }
    if (name.length < 3) {
        nameError.textContent = "*Name must be at least 3 characters";
        return false;
    }
    return true;
}

function validateEmail() {
    let email = document.getElementById("form-email").value.trim();

    if (!emailPattern.test(email)) {
        emailError.textContent = "*Enter a valid email address";
        return false;
    }
    return true;
}

function validateMessage() {
    let message = document.getElementById("form-message").value.trim();

    if (message === "") {
        messageError.textContent = "*Message cannot be empty";
        return false;
    }
    return true;
}

function validateForm() {
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    let isNameValid = validateName();
    let isEmailValid = validateEmail();
    let isMessageValid = validateMessage();

    if (isNameValid && isEmailValid && isMessageValid) {
        let button = document.getElementById("form-submit");

        button.textContent = "Message Sent!";
        button.disabled = true;

        setTimeout(() => {
            button.textContent = "Send the Message!";
            button.disabled = false;
        }, 2000);
    }

    return false; // prevent page reload
}