import React from "react";
import { motion } from "framer-motion";
import "./Brands.css";

const brands = [
  { name: "Modern Home", logo: "B1.png" }, // Replace with actual logo URLs
  { name: "Vintage Style", logo: "B2.png" },
  { name: "Brand", logo: "B3.png" },
  { name: "Nature Home", logo: "B4.png" },
  { name: "Classic Design Studio", logo: "B5.png" },
];

const Brands = () => {
  return (
    <div className="brands-container">
      <motion.h2
        className="brands-heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Trusted Brands
      </motion.h2>
      <div className="brands-logos">
        {brands.map((brand, index) => (
          <motion.div
            className="brand-logo"
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="brand-logo-circle">
              <img src={brand.logo} alt={brand.name} />
            </div>
            <p>{brand.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
