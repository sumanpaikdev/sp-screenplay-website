import React from "react";

import PictureCard from "./PictureCard"

import cross from "../logopicture/close.png"

const Popup = ({ title, image, description, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative mx-2">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-rose-500 text-white w-7 h-7 px-2 py-2 rounded-full"
        >
          <img src={cross} className="invert hover:scale-90" alt="x" />
        </button>
        <img src={image} alt={title} className="w-full rounded-md mb-4" />
        <p className="text-md font-semibold mb-2 bg-gradient-to-r from-black via-black to-rose-600 text-transparent bg-clip-text">Upcoming Post: {title}</p>
        <p className="text-gray-700 text-sm text-justify leading-2">{description}</p>
      </div>
    </div>
  );
};

export default Popup;