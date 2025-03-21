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

function findNearbyClinics() {
  if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
  }
  navigator.geolocation.getCurrentPosition(success, error);
}

function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const clinicList = document.getElementById("clinic-list");
  clinicList.innerHTML = "<p>Loading nearby clinics...</p>";

  const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: latitude, lng: longitude },
      zoom: 14,
  });

  const request = {
      location: new google.maps.LatLng(latitude, longitude),
      radius: 5000,  // 5km radius
      type: ["veterinary_care"]
  };

  const service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
          clinicList.innerHTML = "";
          results.forEach((clinic, index) => {
              let li = document.createElement("li");
              let link = document.createElement("a");
              link.href = `https://www.google.com/maps/search/?api=1&query=${clinic.geometry.location.lat()},${clinic.geometry.location.lng()}`;
              link.target = "_blank";
              link.innerText = `${index + 1}. ${clinic.name} - ${clinic.vicinity}`;
              li.appendChild(link);
              clinicList.appendChild(li);
          });
      } else {
          clinicList.innerHTML = "<p>No nearby animal clinics found.</p>";
      }
  });
}

function error() {
  alert("Unable to retrieve your location.");
}



const cowBreeds = {
  alambadi: {
      name: "Alambadi (Tamil Nadu)",
      description: "Alambadi cattle are known for their resilience and ability to withstand harsh climatic conditions. Primarily used for draught purposes."
  },
  amritMahal: {
      name: "Amrit Mahal (Karnataka)",
      description: "One of the oldest draught breeds in India, Amrit Mahal cattle are used for agricultural work and transportation."
  },
  bachaur: {
      name: "Bachaur (Bihar)",
      description: "Known for their strength and endurance, Bachaur cattle are commonly used in agricultural activities, especially plowing."
  },
  badri: {
      name: "Badri (Uttarakhand)",
      description: "Badri is a small-sized indigenous cow breed found in the Himalayan region. It provides high-quality A2 milk."
  },
  bargur: {
      name: "Bargur (Tamil Nadu)",
      description: "A draught breed known for its agility and stamina, Bargur cattle are used for farming and plowing in hilly regions."
  },
  belahi: {
      name: "Belahi (Haryana, Chandigarh)",
      description: "Belahi is a medium-sized breed with good milk production capacity, commonly used in dairy farming."
  }
};

function showDetails(breed) {
  document.getElementById("breed-title").innerText = cowBreeds[breed].name;
  document.getElementById("breed-info").innerText = cowBreeds[breed].description;
  document.getElementById("details-container").style.display = "block";
}

function hideDetails() {
  document.getElementById("details-container").style.display = "none";
}
