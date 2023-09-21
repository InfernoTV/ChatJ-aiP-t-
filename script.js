// Replace this with your own API endpoint
const apiEndpoint = "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";

// Function to send a message to the chat
function sendMessage() {
    // Your sendMessage function code here
}

// Attach the sendMessage function to the input field's Enter key press
const messageInput = document.querySelector(".chat-input");
messageInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
