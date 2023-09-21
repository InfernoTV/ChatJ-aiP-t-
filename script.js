// Replace this with your own API endpoint
const apiEndpoint = "YOUR_API_ENDPOINT";

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
