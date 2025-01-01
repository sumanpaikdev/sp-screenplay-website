import React from "react";
import BlogCard from "./BlogCard";
import data from "../data/data.json";

// icon
// import detailsArrow from "../logopicture/right-arrow.png";

const ThirdContainer = () => (
  <div className="flex flex-col-reverse items-center overflow-hidden">
    {data.blogs.map((blog) => (
      // <BlogCard key={blog.id} blog={blog} blogo={detailsArrow} />
      <BlogCard key={blog.id} blog={blog} />

    ))}
  </div>
);

export default ThirdContainer;