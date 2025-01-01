import React from "react";

const Popup = ({ title, image, description, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative mx-2">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full"
        >
          ×
        </button>
        <img src={image} alt={title} className="w-full rounded-md mb-4" />
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Popup;