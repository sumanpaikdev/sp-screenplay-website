import React from "react";

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
        <h2 className="text-xl font-bold mb-4">Share This Post</h2>
        <p className="mb-4">Copy the link or share via your favorite platform:</p>
        
        {/* Copy Link */}
        <div className="mb-4">
          <input
            type="text"
            readOnly
            value={link}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={() => navigator.clipboard.writeText(link)}
            className="mt-2 w-full bg-blue-500 text-white p-2 rounded-md"
          >
            Copy Link
          </button>
        </div>

        {/* Share Options */}
        <div className="flex gap-4">
          <button
            onClick={shareOnWhatsApp}
            className="bg-green-500 text-white p-2 rounded-md w-24"
          >
            WhatsApp
          </button>
          <button
            onClick={shareOnEmail}
            className="bg-blue-500 text-white p-2 rounded-md w-24"
          >
            Email
          </button>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-4 w-full bg-gray-400 text-white p-2 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SharePopup;