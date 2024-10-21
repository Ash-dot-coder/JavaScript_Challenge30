alert("JavaScript Challenge : Day-19");

function generateOTP() {
  const otpLength = 6;
  let otp = "";

  for (let i = 0; i < otpLength; i++) {
    otp += Math.floor(Math.random() * 9);
  }
  return otp;
}

document.getElementById("generate-btn").addEventListener("click", () => {
  const otp = generateOTP();
  document.getElementById("otp-display").value = otp;
  document.getElementById("success-message").style.display = "none";
});

document.getElementById("copy-btn").addEventListener("click", () => {
  const otpField = document.getElementById("otp-display");
  if (otpField.value !== "") {
    otpField.select();
    otpField.setSelectionRange(0, 99999);
    document.execCommand("copy");
    showSuccessMessage();
  } else {
    alert("Please generate an OTP first!");
  }
});

function showSuccessMessage() {
  const message = document.getElementById("success-message");
  message.style.display = "block";
  setTimeout(() => {
    message.style.display = "none";
  }, 2000);
}
