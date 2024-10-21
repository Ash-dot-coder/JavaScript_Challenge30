alert("JavaScript Challenge: Day-20");

let pos = document.documentElement;

pos.addEventListener("mousemove", (e) => {
    pos.style.setProperty("--1", e.clientX + "px");
    pos.style.setProperty("--2", e.clientY + "px");
});

document.querySelector('.container').addEventListener("click", (e) => {
    const container = e.target;
    container.classList.add('active');

    setTimeout(() => {
        container.classList.remove('active');
    }, 200); 
});
