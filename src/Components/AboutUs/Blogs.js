import React from "react";
import { motion } from "framer-motion";
import "./Blogs.css";
const RecentBlogs = () => {
  const blogs = [
    {
      title: "Residential Interior Designer In New York, USA",
      category: "Kitchen Design",
      date: "November 23, 2021",
      image: "x3.jpg", // Replace with actual images
    },
    {
      title: "How To Choose The Best Wall Art & Decor House?",
      category: "Living Room",
      date: "November 23, 2021",
      image: "x1.jpg",
    },
    {
      title: "Tips To Increase The Interior Value Of Your House",
      category: "Minimalist Interior",
      date: "November 23, 2021",
      image: "x2.jpg",
    },
    {
      title: "Best Solution For Any Office & Business Interior",
      category: "Kitchen Design",
      date: "November 23, 2021",
      image: "x6.jpg",
    },
    {
      title: "Get Solution For Building Construction Work",
      category: "Living Room",
      date: "November 23, 2021",
      image: "x5.jpg",
    },
    {
      title: "Attain The Best Finish For The Kitchen Cabinets",
      category: "Minimalist Interior",
      date: "November 23, 2021",
      image: "x4.jpg",
    },
  ];

  return (
    <section className="recent-blogs">
      <h2 className="title">Recent Blogs</h2>
      <p className="subtitle">
        Get updates about our latest trends and techniques used in interior
        design project works.
      </p>
      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <motion.div
            className="blog-card"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <span className="blog-category">{blog.category}</span>
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-date">{blog.date}</p>
              <button className="read-more">➔</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RecentBlogs;
