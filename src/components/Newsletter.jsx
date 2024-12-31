import React, { useState } from "react";
// import newsletterImage from "../logopicture/newsletter.jpg"
import datanews from "../data/newsletter.json";


const FourthContainer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
    setEmail("");
  };

  return (
    <div className="p-2  my-6 flex justify-center items-center bg-transparent">
      <div className="flex sm:flex-row flex-col justify-between max-w-5xl bg-white overflow-hidden rounded-md">
        
        <img src={datanews.newsletter.image} alt="arrival" className=" w-[310px] h-[310px]" />

        <div className="flex flex-col justify-center items-center w-auto">
          <p className=" font-philo text-2xl mb-2 mt-4 text-center">Subscribe To Our <br />Newsletter</p>
          <p className="w-[310px] text-center mb-3 text-sm text-gray-800">
            Please, leave your email to be updated <br />on our new arrivals
            screenplays.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className=" shadow rounded border-2 border-gray-300 text-md focus:outline-none px-4 py-1 focus:ring ring-[#603601]"
            />
            <button className="shadow-md bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]  hover:bg-gradient-to-br from-[#1c0a00] via-[#361500] to-[#603601] px-8 py-3 rounded text-sm duration-200 active:bg-[#603601] font-semibold text-gray-100 mt-4 mb-6">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FourthContainer;
