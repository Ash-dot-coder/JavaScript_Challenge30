alert("JavaScript Challenge: Day-30");

document.body.classList.add("dark-mode");

const cube = document.querySelector(".cube");
let currentFace = 0;

function rotateCube(direction) {
  currentFace = (currentFace + direction + 4) % 4;
  cube.style.transform = `rotateY(${currentFace * -90}deg)`;
}

function updateWeatherData() {
  const weatherTypes = ["Sunny ☀️", "Rainy 🌧️", "Cloudy ☁️", "Windy 🌬️"];
  const temp = Math.floor(Math.random() * 15) + 15;
  const condition =
    weatherTypes[Math.floor(Math.random() * weatherTypes.length)];

  document.getElementById("temp").textContent = `${temp}°C`;
  document.getElementById("condition").textContent = condition;
}

function updateForecast() {
  const forecastContent = document.getElementById("forecast-content");
  forecastContent.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    const temp = Math.floor(Math.random() * 15) + 15;
    const day = document.createElement("div");
    day.textContent = `Day ${i + 1}: ${temp}°C`;
    forecastContent.appendChild(day);
  }
}

function updateAQI() {
  const aqiValue = Math.floor(Math.random() * 150) + 50;
  let aqiCategory = "Good";

  if (aqiValue >= 0 && aqiValue <= 50) {
    aqiCategory = "Good";
  } else if (aqiValue >= 51 && aqiValue <= 100) {
    aqiCategory = "Moderate";
  } else if (aqiValue >= 101 && aqiValue <= 150) {
    aqiCategory = "Unhealthy for Sensitive Groups";
  } else if (aqiValue >= 151 && aqiValue <= 200) {
    aqiCategory = "Unhealthy";
  } else if (aqiValue >= 201 && aqiValue <= 300) {
    aqiCategory = "Very Unhealthy";
  } else if (aqiValue >= 301) {
    aqiCategory = "Hazardous";
  }

  document.getElementById("aqi").textContent = `${aqiValue} (${aqiCategory})`;
}

function updateHeadline() {
  const headlines = [
    "Breaking News: Sunny Skies Expected All Week!",
    "Alert: Heavy Rains Expected Tomorrow",
    "Air Quality Alert: Stay Indoors!",
    "Weather Update: Clear Skies with a Gentle Breeze",
  ];
  document.getElementById("headline").textContent =
    headlines[Math.floor(Math.random() * headlines.length)];
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

setInterval(updateWeatherData, 5000);
setInterval(updateForecast, 10000);
setInterval(updateAQI, 7000);
setInterval(updateHeadline, 12000);

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") rotateCube(-1);
  if (e.key === "ArrowRight") rotateCube(1);
});
