import React from "react";
import { motion } from "framer-motion";
import "./RecentProjects.css";
const RecentProjects = () => {
  const projects = [
    {
      title: "Winery Dry Creek Building",
      category: "Art Modern",
      image: "P1.webp", // Replace with actual images
    },
    {
      title: "Creative Workplace Design",
      category: "Minimalist",
      image: "P2.webp",
    },
    {
      title: "Bedroom Interior Pot Work",
      category: "Modern",
      image: "P3.webp",
    },
  ];

  return (
    <section className="recent-projects">
      <h2 className="title">Recent Projects</h2>
      <p className="subtitle">
        With tools to make every part of your process more human and a support
        team excited to help you, getting started with a new base easier.
      </p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-category">{project.category}</p>
            </div>
            <button className="view-more">➔</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
