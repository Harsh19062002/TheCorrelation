import React, { useState } from 'react';
import { motion } from 'framer-motion';
import blogData, { categories } from '../BlogData';


const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;

  const filteredBlogs =
    selectedCategory === 'All'
      ? blogData
      : blogData.filter((blog) => blog.category === selectedCategory);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  return (
    <div className="bg-white px-4 md:px-12 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-600">
        TheCorrelation Blogs
      </h1>
      <p className="text-center text-gray-500 mb-8">
        Discover insightful articles, expert opinions, and the latest trends in our Blogs section.
      </p>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full text-sm font-medium border ${
              selectedCategory === cat ? 'bg-black text-white' : 'text-black border-black'
            }`}
            onClick={() => {
              setSelectedCategory(cat);
              setCurrentPage(1);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentBlogs.map((blog, idx) => (
          <motion.a
            key={idx}
            whileHover={{ scale: 1.03 }}
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg shadow-md overflow-hidden bg-white"
          >
            <img src={blog.image} alt={blog.title} className="w-full text-blue-700 h-36 object-cover" />
            <div className="p-4">
              <h3 className="text-lg text-blue-700 font-semibold mb-1">{blog.title}</h3>
              <p className="text-gray-500 text-sm mb-2">
                {blog.author} • {blog.date} • {blog.category}
              </p>
              <p className="text-sm text-gray-700">{blog.excerpt}</p>
              <span className="text-blue-500 text-sm mt-2 inline-block">
                Read more ↗
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 gap-2 flex-wrap">
        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentPage(idx + 1)}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
              currentPage === idx + 1 ? 'bg-black text-white' : 'bg-gray-200 text-black'
            }`}
          >
            {idx + 1}
          </button>
        ))}
        {currentPage < totalPages && (
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="text-sm px-3 py-1 border text-black border-black rounded-full"
          >
            Next »
          </button>
        )}
      </div>
    </div>
  );
};

export default Blog;
