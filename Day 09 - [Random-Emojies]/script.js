alert("JavaScript Challenge : Day-9")

const btn = document.querySelector("#emoji");
const cnt = document.querySelector("#center");

const emojis = [
    "😆", "😅", "🤣", "😂", "😀", "🤑", "🤨",
    "🙂", "😊", "😗", "😛", "😏", "🤥", "😴",
    "🥺", "😧", "😇", "😳", "🙃", "🥴", "😎",
    "🧐", "🤨", "😒", "🤔", "🤭", "🥰", "😏",
    "🤐", "👀", "🤔", "🤪", "😃", "😁", "😬",
];

const colR = [
    "#32CD32", "#2E8B57", "#87CEEB", "#000080"
];

btn.addEventListener("mouseover", () => {
    btn.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
});

cnt.addEventListener("mouseover", () => {
    cnt.style.backgroundColor = colR[Math.floor(Math.random() * colR.length)];
});