alert("JavaScript Challenge : Day-17");

const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      console.log(checkbox);

      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log("Starting to check them in between!");
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

function resetCheckboxes() {
  checkboxes.forEach((checkbox) => (checkbox.checked = false));
  lastChecked = null;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);

document
  .getElementById("reset-button")
  .addEventListener("click", resetCheckboxes);
