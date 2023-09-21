function sendMessage() {
    const messageInput = document.querySelector(".chat-input");
    const message = messageInput.value.trim();

    if (message !== "") {
        // Envoi de la requête à votre API
        fetch(apiEndpoint, {
            method: "POST",
            body: JSON.stringify({ message }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            // Affichage de la réponse localement
            const chatMessagesContainer = document.querySelector(".chat-messages");
            const messageElement = document.createElement("div");
            messageElement.textContent = data.response; // Assurez-vous que votre API renvoie la réponse dans le champ "response"
            chatMessagesContainer.appendChild(messageElement);
            
            // Sauvegarde de la réponse localement
            saveMessageLocally(data.response);
            
            // Effacer le champ de saisie
            messageInput.value = "";
        })
        .catch(error => {
            console.error("Erreur lors de l'envoi du message :", error);
        });
    }
}
