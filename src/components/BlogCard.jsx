// BlogCard.jsx
import { Link } from "react-router-dom";
import postlogo from "../logopicture/sp.jpg";

const BlogCard = ({ blog, blogo }) => (
  <div className="flex justify-center items-center">
    <div className="container flex flex-col justify-start items-start sm:px-8 px-5 py-4 mx-3 my-[2px] max-w-[968px] sm:hover:translate-x-4 duration-500 shadow rounded-md backdrop-blur-md bg-white text-gray-800">
      <p className="flex flex-row justify-center items-center text-sm capitalize mt-1 mb-1">
        <img className="w-5 rounded-full" src={postlogo} alt="img" />
        <p className="text-gray-600 font-normal text-xs mx-2 capitalize">
          Posted on {blog.date}
        </p>
      </p>
      <p className=" sm:text-md text-md font-sans font-semibold my-1 capitalize">
        <span className="text-[#603601] font-bold uppercase text-sm">{blog.category} | </span>{blog.title}
      </p>
      <p className="w-full text-justify text-md sm:text-md leading-tight ">
        {blog.description}
      </p>

      <Link
        to={`/blog/${blog.id}`}
        className="shadow-md bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] hover:bg-gradient-to-br from-[#1c0a00] via-[#361500] to-[#603601] sm:hover:translate-x-4 duration-500  px-3 py-4 rounded text-sm font-semibold text-gray-100 mt-3 mb-1 flex flex-row items-center justify-center"
      >
        See Details & Download Screenplay
        <img src={blogo} alt=">" className="w-[18px] pl-2 invert ml-1" />
      </Link>
    </div>
  </div>
);

export default BlogCard;
