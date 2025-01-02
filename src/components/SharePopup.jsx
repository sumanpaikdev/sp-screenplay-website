import React from "react";

import whatsapp from "../logopicture/whatsapp.png"
import mailicon from "../logopicture/mail.png"
import copylink from "../logopicture/copy.png"
import closelink from "../logopicture/close.png"



const SharePopup = ({ link, onClose }) => {
  const encodedLink = encodeURIComponent(link);

  const shareOnWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodedLink}`, "_blank");
  };

  const shareOnEmail = () => {
    window.location.href = `mailto:?subject=Check out this blog&body=${encodedLink}`;
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-md w-80">
        <h2 className="text-md font-bold mb-4">Share This Post</h2>
        <p className="mb-4 text-sm">Copy the link or share via your favorite platform:</p>
        
        {/* Copy Link */}
        <div className="mb-4 flex flex-col items-center justify-center">
          <input
            type="text"
            readOnly
            value={link}
            className="w-full p-2 border border-gray-300 outline-none rounded-md text-sm"
          />
          <div className="w-full flex flex-row items-center justify-start">

          <button
            onClick={() => navigator.clipboard.writeText(link)}
            className="mt-2 w-1/2 mr-1 bg-rose-600 shadow-md text-white p-3 rounded-md text-sm flex flex-row items-center justify-center "
          >
            Copy Link<img className="w-4 ml-4 invert animate-bounce" src={copylink} alt="cpy" />
          </button>
          <button
          onClick={onClose}
          className="mt-2 w-1/2 ml-1 bg-black shadow-md text-white p-3 rounded-md text-sm flex flex-row items-center justify-center"
        >
          Close<img className="w-3 ml-4 invert animate-pulse" src={closelink} alt="cls" />
        </button>
          </div>
        </div>

        {/* Share Options */}
        <div className="flex gap-4">
          <button
            onClick={shareOnWhatsApp}
            className="rounded-md w-auto py-2 px-3 bg-green-100 hover:shadow-md duration-300 hover:bg-green-200 text-green-600 text-sm flex flex-row items-center justify-center"
          >
          <img className="w-6 mr-2" src={whatsapp} alt="wp" /> WhatsApp
          </button>
          <button
            onClick={shareOnEmail}
            className="rounded-md w-auto py-2 px-3 bg-blue-100 hover:shadow-md duration-300 hover:bg-blue-200 text-blue-600 text-sm flex flex-row items-center justify-center"
          >
            <img className="w-6 mr-2" src={mailicon} alt="@" /> Email
          </button>
        </div>

        {/* Close Button */}
        
      </div>
    </div>
  );
};

export default SharePopup;