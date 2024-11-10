const chatContent = document.getElementById("chatContent");
const userInput = document.getElementById("userInput");

function sendMessage() {
    const message = userInput.value.trim();
    if (message !== "") {
        displayMessage(message, "user-message");
        generateBotResponse(message);
        userInput.value = "";
    }
}

function displayMessage(message, className) {
    const messageElement = document.createElement("p");
    messageElement.textContent = message;
    messageElement.classList.add(className);
    chatContent.appendChild(messageElement);
    chatContent.scrollTop = chatContent.scrollHeight;
}

function generateBotResponse(message) {
    let response;

    if (message.toLowerCase().includes("hello")) {
        response = "Hi there! How can I help you today?";
    } else if (message.toLowerCase().includes("how are you")) {
        response = "I'm just a bot, but thanks for asking!";
    } else if (message.toLowerCase().includes("your name")) {
        response = "I'm your friendly chatbot.";
    } else {
        response = "I'm sorry, I don't understand that. Can you try asking something else?";
    }

    displayMessage(response, "bot-message");
}

userInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});
