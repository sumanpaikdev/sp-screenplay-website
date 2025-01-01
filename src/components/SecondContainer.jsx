import React from "react";
import PictureCard from "./PictureCard";
import data from "../data/data.json";

const SecondContainer = () => (
  <div>
    {/* <p className="sm:text-2xl text-xl font-philo text-center my-2 sm:my-2 sm:pt-6">
      Active Projects
    </p> */}
    <div className="">
      <div className="flex overflow-x-auto sm:justify-center no-scrollbar snap-x py-7">
        {data.pictures.map((picture) => (
          <PictureCard key={picture.id} picture={picture} />
        ))}
      </div>
      <p className="sm:text-2xl text-xl sm:pt-4 sm:pb-8 pb-6 font-philo text-center bg-gradient-to-r from-black via-black to-rose-600 text-transparent bg-clip-text">
        Screenplay : Movies | Web Series
      </p>
    </div>
  </div>
);

export default SecondContainer;
