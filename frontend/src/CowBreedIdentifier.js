import React, { useState } from "react";

const CowBreedIdentifier = () => {
  const [image, setImage] = useState(null);
  const [breed, setBreed] = useState("");

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleIdentifyBreed = async () => {
    if (!image) {
      alert("Please upload an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", image);

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setBreed(data.breed);
    } catch (error) {
      console.error("Error identifying breed:", error);
    }
  };

  return (
    <div className="p-5 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-700">🐮 Cow Breed Identification</h2>
      <input type="file" onChange={handleFileChange} className="my-2" />
      <button 
        onClick={handleIdentifyBreed} 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Identify Breed
      </button>
      {breed && <p className="mt-3 text-lg text-green-700">Predicted Breed: <strong>{breed}</strong></p>}
    </div>
  );
};

export default CowBreedIdentifier;