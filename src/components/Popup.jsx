import React, { useEffect, useState } from 'react';
import data from '../data/data.json';

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="text-2xl font-bold">{data.popup.title}</h2>
        <img src={data.popup.image} alt="" className="w-full h-48 object-cover my-2" />
        <p>{data.popup.description}</p>
        <button onClick={() => setShowPopup(false)} className="bg-red-500 text-white mt-4 p-2 rounded">Close</button>
      </div>
    </div>
  );
};

export default Popup;
