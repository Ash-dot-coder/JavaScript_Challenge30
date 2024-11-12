alert("JavaScript Challenge: Day-29");

// Search Motion
const sm = document.querySelector(".search-motion");
const mic = document.querySelector(".mic");
const magni = document.querySelector(".magni");

magni.addEventListener("click", () => {
  sm.classList.toggle("active");
  mic.classList.toggle("hidden");
});

// Rounded Navbar
document.querySelector(".navbar-btn").addEventListener("click", () => {
  document.querySelector(".navbar-wrapper").classList.toggle("change");
});
