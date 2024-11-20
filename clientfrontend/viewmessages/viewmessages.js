const viewMessage = async () => {
  try {
    const response = await fetch("http://localhost:2000/message", {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const messages = await response.json();
    const messagesContainer =
      document.getElementsByClassName("message-list")[0];
    if (messagesContainer) {
      messagesContainer.innerHTML = "";
      messages.forEach((message) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const messageElement = document.createElement("p");
        messageElement.textContent = message.content;
        card.appendChild(messageElement);

        messagesContainer.appendChild(card);
      });
    } else {
      console.error("No messages");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  viewMessage();
});
