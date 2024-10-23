alert("JavaScript Challenge: Day-21");

let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");
let hoverElements = document.querySelectorAll(".hover-text");


document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;

  innerCursor.style.left = `${x}px`;
  innerCursor.style.top = `${y}px`;
  outerCursor.style.left = `${x}px`;
  outerCursor.style.top = `${y}px`;
}


hoverElements.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    innerCursor.style.transform = "scale(2)";
    outerCursor.style.transform = "scaleX(0)";
  });

  el.addEventListener("mouseleave", () => {
    innerCursor.style.transform = "translate(-50%, -50%)";
    outerCursor.style.transform = "translate(-50%, -50%)";
  });
});