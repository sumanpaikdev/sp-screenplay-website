import React from "react";
import PictureCard from "./PictureCard";
import data from "../data/data.json";

const SecondContainer = () => (
  <div className="sm:mt-6 sm:pt-8 pt-3 scale-95 sm:scale-100">
    <p className="sm:text-2xl text-xl font-philo text-center sm:mb-2 ">
      Active Projects
    </p>
    <div className="flex overflow-x-auto sm:px-4 sm:py-4 px-0 py-3 sm:justify-center no-scrollbar snap-x sm:pt-6">
      {data.pictures.map((picture) => (
        <PictureCard key={picture.id} picture={picture} />
      ))}
    </div>
    <p className="sm:text-2xl text-xl sm:pt-4 sm:pb-8 pb-6 font-philo text-center">
      Screenplay : Movies | Web Series
    </p>
  </div>
);

export default SecondContainer;
