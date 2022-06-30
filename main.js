const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone-number");
const password = document.getElementById("password");
const retypePassword = document.getElementById("retype-password");
const firstNameError = document.getElementById("first-name-error");
const lastNameError = document.getElementById("last-name-error");
const emailError = document.getElementById("email-error");
const phoneNumberError = document.getElementById("phone-number-error");
const passwordError = document.getElementById("password-error");
const retypePasswordError = document.getElementById("retype-password-error");

firstName.addEventListener("input", function(e) {
    if (firstName.value === "") {
        firstNameError.textContent = "*First name must not be empty";
        firstName.classList.add("error-border");
    } else {
        firstNameError.textContent = "";
        firstName.classList.remove("error-border");
    }
});  

lastName.addEventListener("input", function(e) {
    if (lastName.value === "") {
        lastNameError.textContent = "*Last name must not be empty";
        lastName.classList.add("error-border");
    } else {
        lastNameError.textContent = "";
        lastName.classList.remove("error-border");
    }
}); 

email.addEventListener("input", function(e) {
    if (email.validity.typeMismatch || email.value === "") {
        emailError.textContent = "*Invalid email format";
        email.classList.add("error-border");
    } else {
        emailError.textContent = "";
        email.classList.remove("error-border");
    }
});

phoneNumber.addEventListener("input", function(e) {
    if (phoneNumber.validity.patternMismatch || phoneNumber.value === "") {
        phoneNumberError.textContent = "*Phone number must be between 10-11 digits";
        phoneNumber.classList.add("error-border");
    } else {
        phoneNumberError.textContent = "";
        phoneNumber.classList.remove("error-border");
    }
});

password.addEventListener("input", function(e) {
    if (password.validity.patternMismatch) {
        const currentValue = password.value;
        const regexLower = /[a-z]/g;
        const regexUpper = /[A-Z]/g;
        const regexNumber = /[0-9]/g;
        const regexSymbol = /[!@#$&*]/g;
        let errorMessage = ""
        if (regexLower.test(currentValue)) {
            errorMessage += "";
        } else {
            errorMessage += "*At least 1 lowercase letter.<br>";
        }

        if (regexUpper.test(currentValue)) {
            errorMessage += "";
        } else {
            errorMessage += "*At least 1 uppercase letter.<br>";
        }

        if (regexNumber.test(currentValue)) {
            errorMessage += "";
        } else {
            errorMessage += "*At least 1 number.<br>";
        }

        if (regexSymbol.test(currentValue)) {
            errorMessage += "";
        } else {
            errorMessage += "*At least 1 symbol (!@#$&*).<br>"
        }

        passwordError.innerHTML = errorMessage;
        password.classList.add("error-border");
    } else {
        passwordError.textContent = "";
        password.classList.remove("error-border");
    }
});

retypePassword.addEventListener("input", function(e) {
    if (password.value !== retypePassword.value) {
        retypePasswordError.textContent = "*Both passwords do not match";
        retypePassword.classList.add("error-border");
    } else {
        retypePasswordError.textContent = "";
        retypePassword.classList.remove("error-border");
    }
})