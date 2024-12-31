import React from "react";
import "./Navbar.css";

// logo 
import profilePictureIcon from "../logopicture/sp.jpg"
import gmailIcon from "../logopicture/communication.png"
import aboutIcon from "../logopicture/user.png"
import githubIcon from "../logopicture/github.png"
import twitter from "../logopicture/twitter.png"
import instagram from "../logopicture/instagram.png"

const Navbar = () => (
  <div className="pb-2">
    <div className="absolute top-0 flex items-center justify-between w-full sm:py-6 py-4 sm:px-21 px-8 🪄 special-navbar">
      <div className="text-3xl font-">
        <p className="font-philo text-sm font-medium">
          <span className="text-[#794d18]">Sp</span>.SCREENPLAY
        </p>
      </div>
      <div>
        <ul className="flex items-center">
          <li>
            <img src={profilePictureIcon} alt="img" className="w-10 rounded-full" />
          </li>
        </ul>
      </div>
    </div>
    <div className="static flex flex-col justify-center items-center sm:40 top-40 sm:pt-32 sm:px-24 px-8 pt-20 ">
      <div className=" text-black flex flex-col justify-center items-center">
        <p className="font-philo sm:text-6xl text-4xl sm:pt-0 pt-4">
          <span className="text-[#794d18]">Sp</span>.SCREENPLAY
        </p>
        <p className="sm:w-80 w-60 sm:text-lg text-xs mt-6 flex justify-center text-black">
          MOVIES <b className="text-[#794d18] mx-2">|</b> WEB SERIES
        </p>
        <div className="flex sm:flex-row flex-row justify-center mt-10">
          <a
            className="flex flex-row items-center justify-center mr-2 px-4 sm:mb-0 mb-6 py-3 text-sm font-semibold bg-white rounded  duration-500 shadow-md text-black hover:-translate-y-1 hover:scale-110"
            href="mailto:reachout.suman@gmail.com"
          >
            <img className="w-6 mr-2" src={gmailIcon} alt="gmail" />
            Send Email
          </a>
          <button
            onClick="/#"
            className="flex flex-row items-center justify-center rounded ml-2 px-5 sm:mb-0 mb-6 py-3 text-sm font-semibold bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] hover:bg-gradient-to-br from-[#1c0a00] via-[#361500] to-[#603601] hover:-translate-y-1 hover:scale-110 duration-500 shadow-lg text-white"
          >
           <img className="invert w-6 mr-2" src={aboutIcon} alt="user" /> About Me
          </button>
        </div>
        <div className="flex flex-row items-center justify-center pt-4">
        <a
            className="flex flex-row items-center justify-center mr-4 px-4 sm:mb-0 mb-6 py-3 text-sm font-semibold bg-white rounded  duration-500 shadow-md text-black hover:-translate-y-1 hover:scale-110"
            href="mailto:reachout.suman@gmail.com"
          >
            <img className="w-6 mr-2" src={githubIcon} alt="gmail" />
           Repository
          </a>
          <a
            className="flex flex-row items-center justify-center mr-4 px-4 sm:mb-0 mb-6 py-3 text-sm font-semibold bg-white rounded  duration-500 shadow-md text-black hover:-translate-y-1 hover:scale-110"
            href="mailto:reachout.suman@gmail.com"
          >
            <img className="w-6 " src={twitter} alt="gmail" />
            {/* GitHub Repository */}
          </a>
          <a
            className="flex flex-row items-center justify-center px-4 sm:mb-0 mb-6 py-3 ml-2 text-sm font-semibold bg-white rounded  duration-500 shadow-md text-black hover:-translate-y-1 hover:scale-110"
            href="mailto:reachout.suman@gmail.com"
          >
            <img className="w-6 " src={instagram} alt="gmail" />
            {/* GitHub Repository */}
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Navbar;


// bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]  hover:bg-gradient-to-br from-[#1c0a00] via-[#361500] to-[#603601]