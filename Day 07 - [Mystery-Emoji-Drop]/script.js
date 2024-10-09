alert("JavaScript Challenge : Day-7")

const pressed = [];
const secretCode = 'ash-e';

window.addEventListener("keyup", (e) => {
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(
        -secretCode.length - 1,
        pressed.length - secretCode.length
    );
    if (pressed.join("").includes(secretCode)) {
        console.log("..Em O Ji!");
        addEmoji();
    }
    console.log(pressed);
});