// BlogCard.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";

// icon
import postlogo from "../logopicture/sp.jpg";
import shareIcon from "../logopicture/share.png";
// import sendIcon from "../logopicture/send.png";


import SharePopup from "./SharePopup"; // Import the SharePopup component

const BlogCard = ({ blog, blogo }) => {
  const [showSharePopup, setShowSharePopup] = useState(false);

  const blogLink = `/blog-details/${blog.id}`; // Assuming each blog has a unique id

  const handleShareClick = () => {
    setShowSharePopup(true); // Show the share popup
  };

  const handleCloseSharePopup = () => {
    setShowSharePopup(false); // Close the share popup
  };

  return (
    <div className="flex justify-center items-center">
      <div className="container flex flex-col justify-start items-start sm:px-8 px-5 py-4 mx-3 my-[2px] max-w-[968px] sm:hover:translate-x-4 duration-300 shadow rounded-md backdrop-blur-md bg-white text-gray-800">
        <p className="flex flex-row justify-center items-center text-sm capitalize mt-1 mb-1">
          <img className="w-5 rounded-full" src={postlogo} alt="img" />
          <p className="text-gray-600 font-normal text-xs mx-2 capitalize">
            Posted on {blog.date}
          </p>
        </p>
        <p className=" sm:text-md text-md font-sans font-semibold my-1 capitalize">
          <span className="bg-gradient-to-r from-black via-rose-600 to-rose-600 text-transparent bg-clip-text font-bold uppercase text-sm">
            {blog.category} |{" "}
          </span>
          {blog.title}
        </p>
        <p className="w-full text-justify text-md sm:text-md leading-tight ">
          {blog.description}
        </p>
        <div className="flex flex-row items-center justify-between mt-3 mb-1 w-full">
          <Link
            to={`/blog/${blog.id}`}
            className="shadow-md bg-gradient-to-r from-black via-black to-rose-600 sm:hover:translate-x-4 duration-300  px-3 py-4 rounded text-sm font-semibold text-gray-100 flex flex-row items-center justify-center"
          >
            See Details & Download Screenplay
            {/* <img src={blogo} alt=">" className="w-[18px] pl-2 invert ml-1" /> */}
          </Link>
          
          {/* Share Button */}
          <button
            onClick={handleShareClick}
            className=" bg-transparent text-white px-3 py-3 rounded text-sm hover:scale-125 duration-300"
          >
            {/* Share */} <img src={shareIcon} alt="Share" className="w-6 animate-bounce" />
          </button>
        </div>
      </div>
      {/* Show SharePopup if true */}
      {showSharePopup && (
        <SharePopup
          link={window.location.origin + blogLink}
          onClose={handleCloseSharePopup}
        />
      )}
    </div>
  );
};

export default BlogCard;
