alert("JavaScript Challenge : Day-2")

const secondStick = document.querySelector('.second-stick');
const minStick = document.querySelector('.min-stick');
const hourStick = document.querySelector('.hour-stick');

const digitalTime = document.getElementById('digital-time');
const digitalDate = document.getElementById('digital-date');

const tickSound = document.getElementById('tick-sound');
tickSound.loop = true;

document.addEventListener('click', () => {
    tickSound.play();
});

function setDate() {
    const now = new Date();

    // Analog Clock Calculations
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondStick.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    minStick.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = now.getHours() % 12;
    const hoursDegrees = ((hours / 12) * 360) + ((mins / 60) * 30) + 90;
    hourStick.style.transform = `rotate(${hoursDegrees}deg)`;

    // Digital Clock Display
    let hour = hours < 10 ? '0' + hours : hours;
    let minute = mins < 10 ? '0' + mins : mins;
    let second = seconds < 10 ? '0' + seconds : seconds;

    const timeString = `${hour}:${minute}:${second}`;
    const dateString = now.toDateString();

    digitalTime.textContent = timeString;
    digitalDate.textContent = dateString;
}

setInterval(() => {
    setDate();
    if (secondStick.style.transform !== '') {
        tickSound.currentTime = 0;
        tickSound.play();
    }
}, 1000);

setDate();
