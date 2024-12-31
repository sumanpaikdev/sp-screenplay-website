import React from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../data/data.json';

const BlogDetails = () => {
  const { id } = useParams();
  const blog = data.blogs.find(b => b.id === parseInt(id));

  return (
    <div className="p-4">
      <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover mb-4" />
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <p className="mt-2">{blog.details}</p>
      <Link to="/" className="text-blue-500 mt-4 block">Back to Main Page</Link>
    </div>
  );
};

export default BlogDetails;
