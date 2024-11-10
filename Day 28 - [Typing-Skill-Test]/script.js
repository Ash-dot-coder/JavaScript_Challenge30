const main = document.querySelector(".main");
const typeA = document.querySelector(".typingArea");
const btn = document.querySelector(".btn");
const progressBar = document.querySelector(".progress");
const feedback = document.querySelector(".feedback");
const originalTextDisplay = document.getElementById("originalText");
const userTextDisplay = document.getElementById("userText");

const words = [
  "Dragon Ball Z",
  "Pokemon",
  "Attack on Titan",
  "Haikyu!!",
  "Bleach",
  "Ghoul",
  "Naruto: Shippuden",
  "#One Piece",
  "Hunter X Hunter",
  "Cowboy Bebop",
  "Demon Slayer",
  "@Naruto",
  "Spy X Family",
  "Death Note",
  "One Punch Man",
  "Monster",
  "Jujutsu Kaisen",
  "Vinland Saga",
  "Dororo",
  "Uzumaki",
  "Ninja Kamui",
  "Blue Lock",
  "Arcan",
  "Chainsaw Man",
];

let targetTextArray = [];

const game = {
  start: 0,
  end: 0,
  targetText: "",
  userText: "",
};

btn.addEventListener("click", () => {
  if (btn.textContent === "Start") {
    startGame();
    typeA.value = "";
    typeA.disabled = false;
    feedback.textContent = "";
    originalTextDisplay.innerHTML = "";
    userTextDisplay.innerHTML = "";
  } else if (btn.textContent === "Done") {
    finishGame();
  }
});

typeA.addEventListener("input", () => {
  checkTyping();
});

function startGame() {
  let randText = words[Math.floor(Math.random() * words.length)];
  main.textContent = "";
  animateText(randText);
  game.targetText = randText;
  targetTextArray = randText.split("");
  btn.textContent = "Done";
  game.start = new Date().getTime();
  progressBar.style.width = "0";
  feedback.style.color = "#ff6b6b";
}

function animateText(text) {
  let index = 0;
  const interval = setInterval(() => {
    if (index < text.length) {
      main.textContent += text[index++];
    } else {
      clearInterval(interval);
    }
  }, 100);
}

function checkTyping() {
  game.userText = typeA.value;
  const userInputLength = game.userText.length;
  const targetTextLength = game.targetText.length;

  if (userInputLength > targetTextLength) return;

  let correctCount = 0;
  let highlightedText = "";

  for (let i = 0; i < userInputLength; i++) {
    if (game.userText[i] === targetTextArray[i]) {
      correctCount++;
      highlightedText += `<span class="correct">${game.userText[i]}</span>`;
    } else {
      highlightedText += `<span class="incorrect">${game.userText[i]}</span>`;
    }
  }

  for (let i = userInputLength; i < targetTextLength; i++) {
    highlightedText += `<span class="remaining">${targetTextArray[i]}</span>`;
  }

  main.innerHTML = highlightedText;

  const progressPercentage = Math.min(
    (userInputLength / targetTextLength) * 100,
    100
  );
  progressBar.style.width = `${progressPercentage}%`;

  if (game.userText === game.targetText) {
    feedback.textContent = "Perfect! All correct!";
    feedback.style.color = "#61dafb";
    typeA.classList.remove("error");
  } else if (userInputLength > 0 && correctCount === userInputLength) {
    feedback.textContent = "Good so far, keep going!";
    feedback.style.color = "#21a1f1";
    typeA.classList.remove("error");
  } else {
    feedback.textContent = "Oops! Check for mistakes.";
    feedback.style.color = "#ff6b6b";
    typeA.classList.add("error");
  }
}

function finishGame() {
  const totalTime = ((new Date().getTime() - game.start) / 1000).toFixed(2);
  let correctLetters = 0;
  let originalHighlight = "";
  let userHighlight = "";

  for (let i = 0; i < game.targetText.length; i++) {
    if (game.userText[i] === game.targetText[i]) {
      correctLetters++;
      originalHighlight += `<span class="correct">${game.targetText[i]}</span>`;
      userHighlight += `<span class="correct">${game.userText[i] || ""}</span>`;
    } else {
      originalHighlight += `<span class="remaining">${game.targetText[i]}</span>`;
      userHighlight += `<span class="incorrect">${
        game.userText[i] || "_"
      }</span>`;
    }
  }

  originalTextDisplay.innerHTML = originalHighlight;
  userTextDisplay.innerHTML = userHighlight;

  const accuracy = ((correctLetters / game.targetText.length) * 100).toFixed(2);
  main.innerHTML = `Time: ${totalTime}s | Accuracy: ${accuracy}%`;
  btn.textContent = "Start";
  typeA.disabled = true;
  feedback.textContent = "";
  progressBar.style.width = "0";
}
