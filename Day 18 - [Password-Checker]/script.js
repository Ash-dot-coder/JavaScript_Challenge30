alert("JavaScript Challenge : Day-18");

document.getElementById("password").addEventListener("input", function () {
    const password = this.value;

    const upperCasePattern = /[A-Z]/;
    const lowerCasePattern = /[a-z]/;
    const numberPattern = /[0-9]/;
    const specialCharPattern = /[~`!@#$%^&*()_\-+=,.:;{}<>?|[\]\\]/;

    updateValidation("upperCase", upperCasePattern.test(password));
    updateValidation("lowerCase", lowerCasePattern.test(password));
    updateValidation("number", numberPattern.test(password));
    updateValidation("specialChar", specialCharPattern.test(password));
});

function updateValidation(elementId, isValid) {
    const element = document.getElementById(elementId);
    const icon = element.querySelector("i");

    if (isValid) {
        element.classList.remove("invalid");
        element.classList.add("valid");
        icon.classList.remove("bi-shield-x");
        icon.classList.add("bi-shield-check");
    } else {
        element.classList.remove("valid");
        element.classList.add("invalid");
        icon.classList.remove("bi-shield-check");
        icon.classList.add("bi-shield-x");
    }
}

const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", function () {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);

    const icon = this.querySelector("i");
    icon.classList.toggle("bi-eye-slash");
    icon.classList.toggle("bi-eye");
});
