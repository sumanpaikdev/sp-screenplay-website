import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data/data.json";

import backIcon from "../logopicture/back.png";
import downloadIcon from "../logopicture/download.png";


const BlogDetails = () => {
  const { id } = useParams();
  const blog = data.blogs.find((b) => b.id === parseInt(id));

  return (
    <div className="px-2 sm:py-[2rem] py-4 font-sans flex flex-col items-center justify-center pb-6">
      <div className="w-[18rem] h-[18rem] flex justify-center items-center overflow-hidden rounded shadow-md">
        <img src={blog.image} alt={blog.title} className="" />
        
      </div>
      <div className="py-6 px-2 mx-2 ">
      <p className="text-center font-semibold bg-gradient-to-r from-black via-rose-600 to-rose-600 text-transparent bg-clip-text uppercase text-sm mt-0 mb-1 animate-pulse">
        {blog.category}
      </p>
        <div className="flex flex-col items-center justify-center">
          <p className="uppercase font-semibold text-md pb-6 flex flex-col items-center justify-center">
            {blog.title} <br />
            <span className="text-md font-normal capitalize pt-1">{blog.genre}</span>
          </p>
          <p>Story by: {blog.storyBy}</p>
          <p className="pb-6">Screenplay by: {blog.screenplayBy}</p>
          <div className="w-[310px] ">
            <p>Location: {blog.location}</p>
            <p>
              Email:{" "}
              <a href="/" className="text-indigo-600">
                {blog.email}
              </a>
            </p>
            <p>
              Phone No: <span>+91 {blog.phoneNo}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="mb-4 flex justify-between">
        {/* Download Button for PDF 1 */}
        <a
          href={blog.pdf1} // Path to the first PDF
          download
          className=" text-white py-3 px-4 rounded bg-gradient-to-r from-black via-black to-rose-600 transition flex flex-row items-center justify-center mr-1"
        >
          Treatment <img className=" w-6 ml-2 invert animate-bounce" src={downloadIcon} alt="bck" />
        </a>

        {/* Download Button for PDF 2 */}
        <a
          href={blog.pdf2} // Path to the second PDF
          download
          className=" text-white py-3 px-4 rounded bg-gradient-to-r from-black via-black to-rose-600 transition flex flex-row items-center justify-center ml-1"
        >
          Screenplay <img className=" w-6 ml-2 invert animate-bounce" src={downloadIcon} alt="bck" />
        </a>
      </div>
      <p className="text-md font-semibold">SYNOPSIS:</p>
      <p className="mt-2 max-w-[800px] text-md text mx-2">{blog.details}</p>
      <Link
        to="/"
        className="flex flex-row items-center justify-center px-3 py-3 rounded-md bg-gray text-white opacity-90 text-md mt-4 mb-21 border-2 bg-gray-900 sm:hover:-translate-x-4 duration-300 ">
        <img className=" w-4 mr-3 invert animate-pulse" src={backIcon} alt="bck" /> Back to Main Page
      </Link>
    </div>
  );
};

export default BlogDetails;
