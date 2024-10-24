alert("JavaScript Challenge: Day-22");


let input = document.getElementById("inputBox");

input.addEventListener("input", validate);

function validate() {
  let form = document.querySelector(".mainForm");
  let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (pattern.test(input.value)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
  } else {
    form.classList.add("invalid");
    form.classList.remove("valid");
  }
}

