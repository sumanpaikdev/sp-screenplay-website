import React from "react";
import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import SecondContainer from "../components/SecondContainer";
import ThirdContainer from "../components/ThirdContainer";
import Newsletter from "../components/Newsletter"; // Import Newsletter
import Footer from "../components/Footer";
import Popup from "../components/Popup";

// Import JSON data
import data from "../data/data.json";

const HomePage = () => {

  //-----------------------------------------------
  // const [showPopup, setShowPopup] = useState(false);

  // // Extract popup data from JSON
  // const popupData = data.popup;

  // // Show the popup after 3 seconds
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowPopup(true);
  //   }, 3000);

  //   return () => clearTimeout(timer); // Cleanup timer
  // }, []);

//-----------------------------
// const [showPopup, setShowPopup] = useState(false);

// // Extract popup data from JSON
// const popupData = data.popup;

// // Check if popup has been shown
// useEffect(() => {
//   const isPopupShown = localStorage.getItem("popupShown");

//   if (!isPopupShown) {
//     const timer = setTimeout(() => {
//       setShowPopup(true);
//       localStorage.setItem("popupShown", "true"); // Mark popup as shown
//     }, 3000);

//     return () => clearTimeout(timer); // Cleanup timer
//   }
// }, []);   starting time opening the website
// --------------------------------------
const [showPopup, setShowPopup] = useState(false);

// Extract popup data from JSON
const popupData = data.popup;

// Time duration to show popup again (24 hours = 86400000 ms)
const popupShowInterval = 86400000;

// Check if popup has been shown recently
useEffect(() => {
  const lastShown = localStorage.getItem("popupShown");
  const currentTime = Date.now();

  if (!lastShown || currentTime - lastShown > popupShowInterval) {
    const timer = setTimeout(() => {
      setShowPopup(true);
      localStorage.setItem("popupShown", Date.now()); // Save current time
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer
  }
}, []);

  return (
    <div className="w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#ffe6be] via-[#ffedcd] to-[#ffffff]">
      <Navbar />
      <SecondContainer />
      <ThirdContainer />
      <Newsletter /> {/* Add Newsletter here */}
      <Footer />
      {showPopup && (
        <Popup
          title={popupData.title}
          image={popupData.image}
          description={popupData.description}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default HomePage;
