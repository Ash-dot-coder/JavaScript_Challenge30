alert("JavaScript Challenge : Day-12")

const c2 = document.querySelector(".content-container-2");
const c3 = document.querySelector(".img-js");
const keyB = document.querySelector(".btn");

keyB.addEventListener("click", () => {
    c2.classList.toggle("toggle");
    c3.classList.toggle("toggle");
});