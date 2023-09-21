// Fonction pour sauvegarder les messages localement
function saveMessageLocally(message) {
    const chatMessages = JSON.parse(localStorage.getItem("chatMessages")) || [];
    chatMessages.push(message);
    localStorage.setItem("chatMessages", JSON.stringify(chatMessages));
}

// Fonction pour charger les messages localement et les afficher
function loadMessagesLocally() {
    const chatMessages = JSON.parse(localStorage.getItem("chatMessages")) || [];
    const chatMessagesContainer = document.querySelector(".chat-messages");
    
    chatMessages.forEach(message => {
        const messageElement = document.createElement("div");
        messageElement.textContent = message;
        chatMessagesContainer.appendChild(messageElement);
    });
}

// Au chargement de la page, chargez les messages localement
window.addEventListener("load", loadMessagesLocally);
