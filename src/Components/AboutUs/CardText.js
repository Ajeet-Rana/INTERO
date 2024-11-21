import React from "react";
import "./CardText.css";
import { useState } from "react";
function CardText() {
  const [selectedCard, setSelectedCard] = useState(null);

  const cardData = [
    {
      id: 1,
      title: "Interior Design",
      shortDescription:
        "Enhancing the interior to achieve a healthier environment for the people using right space.",
      fullDescription:
        "Interior design is the art and science of enhancing the interior of a space to achieve a healthier and more aesthetically pleasing environment for the people using it.",
    },
    {
      id: 2,
      title: "Furniture",
      shortDescription:
        "Movable articles that are used to make a room or building suitable for living or working.",
      fullDescription:
        "Furniture refers to movable objects that support various human activities such as seating, eating, and sleeping. It also includes objects that hold items at a convenient height for work or storage.",
    },
    {
      id: 3,
      title: "Flooring",
      shortDescription:
        "Thin object any finished material applied over a floor structure to provide a walking surface.",
      fullDescription:
        "Flooring refers to the permanent covering of a floor or the process of installing such a covering. Materials commonly used include wood, tiles, carpet, and vinyl.",
    },
  ];

  const handleReadMore = (id) => {
    setSelectedCard(id);
  };

  const handleClose = () => {
    setSelectedCard(null);
  };

  return (
    <div className="card-container">
      {cardData.map((card) => (
        <div
          key={card.id}
          className={`card ${selectedCard === card.id ? "expanded" : ""}`}
        >
          <h2>{card.title}</h2>
          <p>
            {selectedCard === card.id
              ? card.fullDescription
              : card.shortDescription}
          </p>
          {selectedCard === card.id ? (
            <button onClick={handleClose} className="btn">
              Close
            </button>
          ) : (
            <button onClick={() => handleReadMore(card.id)} className="btn">
              View More →
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default CardText;
