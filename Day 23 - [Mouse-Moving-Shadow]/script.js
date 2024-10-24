alert("JavaScript Challenge: Day-23");

const hero = document.querySelector(".hero");
const text = hero.querySelectorAll("h1");
const walk = 73.75;

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  text.forEach((h1) => {
    h1.style.textShadow = `
      ${xWalk}px ${yWalk}px 20px rgba(0, 0, 0, 256),
      ${xWalk * -0.5}px ${yWalk * -0.5}px 15px #ccc
    `;
  });
}

hero.addEventListener("mousemove", shadow);
