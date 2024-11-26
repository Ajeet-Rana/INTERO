import React from "react";
import { motion } from "framer-motion";
import "./Testimonials.css"; // External CSS for styling

const testimonials = [
  {
    name: "Lisa Clairton",
    location: "New York, USA",
    feedback:
      "We selected Interno interior because of rigorous design background & education.",
    image: "im1.webp",
  },
  {
    name: "David Knight",
    location: "Sydney, Australia",
    feedback:
      "The team exceeded our expectations and emerged as leaders of our projects.",
    image: "im2.webp",
  },
  {
    name: "Lisa Clairton",
    location: "Paris, France",
    feedback:
      "They balanced the architectural vision and the project realities beautifully.",
    image: "im3.webp",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <motion.h2
        className="testimonials-heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        What the People Think About Interno
      </motion.h2>
      <div className="testimonials-cards">
        {testimonials.map((testimonial, index) => (
          <motion.div
            className="testimonial-card"
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
            />
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-location">{testimonial.location}</p>
            <p className="testimonial-feedback">{testimonial.feedback}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
