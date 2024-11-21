import React from "react";
import "./Stats.css";

const statsData = [
  { value: "12", label: "Years Of Experience" },
  { value: "5K", label: "Success Project" },
  { value: "1K", label: "Active Project" },
  { value: "4K", label: "Happy Customers" },
];

const Stats = () => {
  return (
    <div className="stats-container">
      {statsData.map((stat, index) => (
        <div className="stat-item" key={index}>
          <h2 className="stat-value">{stat.value}</h2>
          <p className="stat-label">{stat.label}</p>
          {index < statsData.length - 1 && <div className="divider"></div>}
        </div>
      ))}
    </div>
  );
};

export default Stats;
