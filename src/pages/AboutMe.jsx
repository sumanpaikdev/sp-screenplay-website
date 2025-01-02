import React from "react";

import gitlgo from "../logopicture/github.png";
import twitterlgo from "../logopicture/twitter.png";
import gmllogo from "../logopicture/communication.png";
import instalogo from "../logopicture/instagram.png";
import splogo from "../logopicture/sp.jpg"

const AboutMe = () => {
  return (
    <div className="p-6 flex flex-col justify-center items-center mt-6">
      <img src={splogo} alt="sp" className="w-20 rounded-full shadow-md mb-2"/>
      <h4 className="text-xl font-semibold bg-gradient-to-r from-black via-black to-rose-600 text-transparent bg-clip-text uppercase font-philo">Suman Paik</h4>
      <p className="mt-4 text-md max-w-[600px]">
        Hi,<span className="animate-ping">🙋‍♂️</span> I'm Suman Paik! As a web developer and designer, I craft creative
        and functional websites using React, Tailwind CSS, and modern
        technologies. Beyond coding, I'm a passionate storyteller who writes
        films and web series, weaving compelling narratives that resonate with
        audiences.
      </p>
      <p className="mt-2 mb-6">
        Feel free to reach out to me anytime at{" "}
        <a
          href="mailto:reachout.suman@gmail.com"
          className="text-blue-700 underline"
        >
          reachout.suman@gmail.com 
        </a>
        .
      </p>
      <div className="flex flex-col justify-center items-center sm:pt-4">
        <a
          className="flex flex-row items-center justify-start mb-1 px-4 py-3 text-sm font-semibold bg-gradient-to-r from-black via-black to-rose-600 rounded  duration-300 shadow-md text-white hover:-translate-x-1 hover:scale-105 w-[300px]"
          href="https://x.com/sumanpaik_"
        >
          <img
            className="w-6 ml-[5px] mr-3 invert"
            src={twitterlgo}
            alt="gmail"
          />
          Twitter @sumanpaik_
        </a>
        <a
          className="flex flex-row items-center justify-start mb-1 px-4 py-3 text-sm font-semibold bg-gradient-to-r from-black via-black to-rose-600 rounded  duration-300 shadow-md text-white hover:-translate-x-1 hover:scale-105 w-[300px]"
          href="https://www.instagram.com/sumanpaik_/"
        >
          <img
            className="w-6 ml-[5px] mr-3"
            src={instalogo}
            alt="gmail"
          />
          Instagram @sumanpaik_
        </a>
        <a
          className="flex flex-row items-center justify-start mb-1 px-4 py-3 text-sm font-semibold bg-gradient-to-r from-black via-black to-rose-600 rounded  duration-300 shadow-md text-white hover:-translate-x-1 hover:scale-105 w-[300px]"
          href="mailto:reachout.suman@gmail.com"
        >
          <img className="w-6 ml-[5px] mr-3" src={gmllogo} alt="gmail" />
          Suman Paik
        </a>
        <a
          className="flex flex-row items-center justify-start mb-1 px-4 py-3 text-sm font-semibold bg-gradient-to-r from-black via-black to-rose-600 rounded  duration-300 shadow-md text-white hover:-translate-x-1 hover:scale-105 w-[300px]"
          target="_black"
          href="https://github.com/sumanpaikdev"
        >
          <img className="w-6 ml-[5px] mr-3 invert" src={gitlgo} alt="gmail" />
          GitHub @sumanpaikdev
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
