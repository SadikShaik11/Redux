import React from "react";

const Rating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        style={{
          display: "inline-block",
          border: "black",
          marginRight: "5px",
          color: i <= rating ? "#ff9f1c" : "black", // Change color based on rating
        }}
      >
        &#9733;
      </span>
    );
  }

  return (
    <div>
      {stars} <span style={{ fontWeight: 800 }}> {rating}</span>
    </div>
  );
};

export default Rating;
