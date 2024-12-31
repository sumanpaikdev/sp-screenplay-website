import React from 'react';
import Navbar from '../components/Navbar';
import SecondContainer from '../components/SecondContainer';
import ThirdContainer from '../components/ThirdContainer';
import Newsletter from '../components/Newsletter'; // Import Newsletter
import Footer from '../components/Footer';



const HomePage = () => (
  <div className="w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#ffe6be] via-[#ffedcd] to-[#ffffff]">
    <Navbar />
    <SecondContainer />
    <ThirdContainer />
    <Newsletter/> {/* Add Newsletter here */}
    <Footer />
  </div>
);

export default HomePage;
