async function askQuestion() {
    const question = document.getElementById("question").value;
    const language = document.getElementById("language").value;
    const chatBox = document.getElementById("chat-box");

    if (!question) {
        alert("Please enter a question!");
        return;
    }

    const userMessage = document.createElement("div");
    userMessage.classList.add("chat-message", "user");
    userMessage.innerText = question;
    chatBox.appendChild(userMessage);
    chatBox.scrollTop = chatBox.scrollHeight;

    const botMessage = document.createElement("div");
    botMessage.classList.add("chat-message", "bot");
    botMessage.innerText = "Typing...";
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;

    try {
        const response = await fetch("https://cow-breed-api.onrender.com/ask", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ question, language })
        });

        if (!response.ok) throw new Error("Server error!");
        if (!response.ok) throw new Error("Server error!");

        const data = await response.json();
        botMessage.innerText = data.response || "I don't understand that.";

        // 🔉 Add Text-to-Speech functionality
        if (data.audio_url) {
            const audio = new Audio(data.audio_url);
            audio.play();
        }

        // 🔉 Add Text-to-Speech functionality
        if (data.audio_url) {
            const audio = new Audio(data.audio_url);
            audio.play();
        }
    } catch (error) {
        console.error("Error:", error);
        botMessage.innerText = "Error connecting to server.";
    }

    chatBox.scrollTop = chatBox.scrollHeight;
    document.getElementById("question").value = "";
}

// 🎤 Speech-to-Text Functionality (Supports English & Hindi)
document.getElementById("speech-btn").addEventListener("click", async () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    const selectedLanguage = document.getElementById("language").value;
    
    recognition.lang = selectedLanguage === "hi" ? "hi-IN" : "en-US";
    recognition.onstart = () => console.log("Listening...");
    recognition.onspeechend = () => recognition.stop();

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        document.getElementById("question").value = transcript;
    };

    recognition.start();
});

// 🎤 Speech-to-Text Functionality (Supports English & Hindi)
document.getElementById("speech-btn").addEventListener("click", async () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    const selectedLanguage = document.getElementById("language").value;
    
    recognition.lang = selectedLanguage === "hi" ? "hi-IN" : "en-US";
    recognition.onstart = () => console.log("Listening...");
    recognition.onspeechend = () => recognition.stop();

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        document.getElementById("question").value = transcript;
    };

    recognition.start();
});