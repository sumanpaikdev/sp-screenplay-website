import React from "react";

const AboutMe = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">About Me</h1>
      <p className="mt-4 text-lg">
        Hi, I’m [Your Name]! I’m a web developer and designer with a passion for building creative and functional websites. 
        I enjoy working with React, Tailwind CSS, and other modern technologies.
      </p>
      <p className="mt-2">
        Feel free to reach out to me anytime at <a href="mailto:youremail@example.com" className="text-blue-500 underline">youremail@example.com</a>.
      </p>
    </div>
  );
};

export default AboutMe;
