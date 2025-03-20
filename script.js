// ----- AI Cow Breed Detection -----
async function identifyBreed() {
  const imageInput = document.getElementById('imageUpload');
  if (imageInput.files.length === 0) {
    alert('Please upload an image first.');
    return;
  }
  const modelURL = "https://teachablemachine.withgoogle.com/models/YOUR_MODEL_URL/model.json";
  const model = await tf.loadLayersModel(modelURL);

  const reader = new FileReader();
  reader.onload = async function (event) {
    const img = new Image();
    img.src = event.target.result;
    img.onload = async function () {
      const tensorImg = tf.browser.fromPixels(img)
        .resizeNearestNeighbor([224, 224])
        .toFloat()
        .expandDims();

      const prediction = model.predict(tensorImg);
      const classes = ["Gir", "Sahiwal", "Kankrej", "Red Sindhi", "Tharparkar"];
      const resultIndex = prediction.argMax(-1).dataSync()[0];
      document.getElementById('result').innerText = "Identified Breed: " + classes[resultIndex];
    };
  };
  reader.readAsDataURL(imageInput.files[0]);
}

// ----- AI Cow Health Diagnosis (Simulation) -----
function diagnoseHealth() {
  const healthImage = document.getElementById('healthImageUpload').files;
  const symptoms = document.getElementById('symptomInput').value.trim().toLowerCase();
  let diagnosis = "";

  if (symptoms.includes("fever") || symptoms.includes("lethargy")) {
    diagnosis = "Possible infection. Please consult a veterinarian.";
  } else if (healthImage.length > 0) {
    diagnosis = "Image analysis complete: The cow appears healthy.";
  } else {
    diagnosis = "Insufficient data. Please provide symptoms or an image.";
  }
  document.getElementById('healthResult').innerText = diagnosis;
}

// ----- IoT Gaushala Monitoring (Mock Data Update) -----
function updateIoTData() {
  document.getElementById('temperature').innerText = "37.8°C";
  document.getElementById('activity').innerText = "Active";
  document.getElementById('milk').innerText = "13 Liters";
}
setInterval(updateIoTData, 5000);

// ----- Blockchain Sponsorship Simulation -----
async function connectWallet() {
  if (window.ethereum) {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      alert("Wallet Connected!");
    } catch (error) {
      console.error(error);
    }
  } else {
    alert("Please install MetaMask!");
  }
}

function sponsorCow() {
  document.getElementById('blockchainResult').innerText = "Congratulations! You have sponsored a cow NFT.";
}

// ----- Marketplace Cart Functionality -----
let cart = [];
function addToCart(productName) {
  cart.push(productName);
  updateCartUI();
}
function updateCartUI() {
  const cartItems = document.getElementById('cartItems');
  cartItems.innerHTML = "";
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerText = `${index + 1}. ${item}`;
    cartItems.appendChild(li);
  });
}

// ----- AI Chatbot (Simple Rule-Based) -----
function chatbotResponse() {
  const input = document.getElementById('chatInput').value.trim().toLowerCase();
  let response = "";
  
  if (input.includes("breed")) {
    response = "Our AI can identify Indian cow breeds like Gir, Sahiwal, and more!";
  } else if (input.includes("health") || input.includes("disease")) {
    response = "Ensure your cows have regular check-ups. For emergencies, contact a vet immediately.";
  } else if (input.includes("organic")) {
    response = "Organic farming with cow dung fertilizer is one of our highlights!";
  } else {
    response = "I'm here to help! Ask me about cow breeds, health, or organic farming practices.";
  }
  document.getElementById('chatResult').innerText = response;
}

// ----- Data Analytics Dashboard using Chart.js -----
function renderAnalyticsChart() {
  const ctx = document.getElementById('analyticsChart').getContext('2d');
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
      label: "Cow Population",
      data: [120, 130, 125, 140, 135, 150],
      backgroundColor: "rgba(1,50,32, 0.6)",
      borderColor: "rgba(1,50,32, 1)",
      borderWidth: 2
    }]
  };

  const analyticsChart = new Chart(ctx, {
    type: 'line',
    data: chartData,
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          ticks: { stepSize: 10 }
        }
      }
    }
  });
}

// ----- Education Section: Quiz and Video -----
// Simple Quiz Checker
function checkQuiz() {
  const options = document.getElementsByName('quiz');
  let selectedValue = "";
  for (const option of options) {
    if (option.checked) {
      selectedValue = option.value;
      break;
    }
  }
  
  let resultText = "";
  // Assuming "Sahiwal" is the correct answer for demonstration purposes.
  if (selectedValue === "Sahiwal") {
    resultText = "Correct! Sahiwal is known for its high milk yield.";
  } else if (selectedValue !== "") {
    resultText = "Incorrect, please try again!";
  } else {
    resultText = "Please select an answer.";
  }
  

  // Initialize the Analytics Dashboard on page load
  window.onload = function() {
    renderAnalyticsChart();
  };
  // ----- FAQ Toggle Function -----
function toggleFAQ(faqId) {
  const answerDiv = document.getElementById(faqId);
  if (answerDiv.style.display === "block") {
    answerDiv.style.display = "none";
  } else {
    answerDiv.style.display = "block";
  }
}

  document.getElementById('quizResult').innerText = resultText;
}

// ----- Miscellaneous -----
function learnMore() {
  alert("Gaumitra is dedicated to using technology to revive and conserve indigenous cow breeds. Explore our features to see how AI, IoT, Blockchain, and more are working together for a sustainable future.");
}

// Initialize the Analytics Dashboard on page load
window.onload = function() {
  renderAnalyticsChart();
};
// ----- FAQ Toggle Function -----
function toggleFAQ(faqId) {
const answerDiv = document.getElementById(faqId);
if (answerDiv.style.display === "block") {
  answerDiv.style.display = "none";
} else {
  answerDiv.style.display = "block";
}}