const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatbtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");

let userMessage = ""; // Initialize userMessage as an empty string
const API_KEY = "199ea02e56msh697cf2a51b7ecbdp1a0b33jsn5e58154cbcaa"; // API key from RapidAPI
const inputInitHeight = chatInput.scrollHeight;

// Create a chat <li> element with passed message and class name
const createChatLi = (message, className) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  let chatContent =
    className === "outgoing"
      ? `<p></p>`
      : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
  chatLi.innerHTML = chatContent;
  chatLi.querySelector("p").textContent = message;
  return chatLi; // return chat <li> element
};

// Generate a response from the bot using the new API
const generateResponse = (incomingChatli) => {
  const messageElement = incomingChatli.querySelector("p");

  const API_URL = "https://open-ai21.p.rapidapi.com/";
  const queryParams = new URLSearchParams({
    message: userMessage, // Send the user's message as a query parameter
  });

  const requestOptions = {
    method: "GET",
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": "open-ai21.p.rapidapi.com",
    },
  };

  // Send GET request to RapidAPI for response
  fetch(`${API_URL}?${queryParams.toString()}`, requestOptions)
    .then((res) => res.json())
    .then((data) => {
      console.log(data); // Debug: Check the structure of the response
      messageElement.textContent = data?.response || "No response from API.";
    })
    .catch((error) => {
      console.error(error); // Log error details
      messageElement.classList.add("error");
      messageElement.textContent = "Oops, something went wrong. Please try again.";
    })
    .finally(() => {
      chatbox.scrollTo(0, chatbox.scrollHeight);
    });
};

// Handle sending a chat message
const handleChat = () => {
  userMessage = chatInput.value.trim(); // Get user entered message
  if (!userMessage) return;

  // Clear the input textarea and reset its height
  chatInput.value = "";
  chatInput.style.height = `${inputInitHeight}px`;

  // Append the user's message to the chatbox
  const outgoingChatli = createChatLi(userMessage, "outgoing");
  chatbox.appendChild(outgoingChatli);
  chatbox.scrollTo(0, chatbox.scrollHeight);

  // Display "Typing..." while waiting for the response
  setTimeout(() => {
    const incomingChatli = createChatLi("Typing...", "incoming");
    chatbox.appendChild(incomingChatli);
    generateResponse(incomingChatli);
  }, 600);
};

// Adjust textarea height as the user types
chatInput.addEventListener("input", () => {
  chatInput.style.height = `${inputInitHeight}px`; // Reset to initial height
  chatInput.style.height = `${chatInput.scrollHeight}px`; // Adjust to content height
});

// Handle Enter key press (without Shift key) to send message
chatInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
    e.preventDefault(); // Prevent default Enter action (new line)
    handleChat();
  }
});

// Send button click handler
sendChatbtn.addEventListener("click", handleChat);

// Close chatbot handler
closeBtn.addEventListener("click", () =>
  document.body.classList.remove("show-chatbot")
);

// Toggle chatbot visibility handler
chatbotToggler.addEventListener("click", () =>
  document.body.classList.toggle("show-chatbot")
);
