import React from "react";
import githubLogo from "../logopicture/github.png"

const Footer = () => (
  <footer className="flex sm:flex-row flex-col justify-center items-center text-gray-800 text-sm py-8 rounded-t-xl">
    <div className="flex flex-col items-center justify-center">
      <p className="text-lg font-philo flex items-center justify-center">
        Sp.SCREENPLAY{" "}
        <a href="/" className="ml-4">
          {" "}
          <img
            src={githubLogo}
            alt="github"
            className=" w-8 hover:scale-110 duration-200"
          />
        </a>
      </p>
      <p className="text-sm">All Rights Reserved. © 2024 Suman Paik</p>
    </div>
  </footer>
);

export default Footer;
