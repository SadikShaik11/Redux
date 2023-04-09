import React from "react";
import { category } from "../assest";
import ".././css/HomePage.css";
const Categories = () => {
  return (
    <div
      className='Categories'
      style={{
        position: "absolute",
        padding: "20px",
        width: "300px",
        height: "90.5%",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",
        zIndex: "999",
        overflowY: "auto",
      }}
    >
      <ul
        style={{
          listStyleType: "none",
          fontSize: "medium",
          padding: 0,
          color: "black",
        }}
      >
        <li>Categories</li>
      </ul>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {category.data.map((cat) => (
          <li
            key={cat.disease}
            style={{
              display: "flex",
              color: "red",
              fontSize: "1.2rem",
              fontWeight: "bold",
              margin: "10px 0",
              cursor: "pointer",
              transition: "all 0.2s ease-in-out",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.2)";
              e.currentTarget.style.color = "black";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.color = "red";
            }}
          >
            <img
              src={cat.imageUrl}
              alt={cat.disease}
              style={{
                width: "50px",
                height: "50px",
                marginRight: "8px",
                borderRadius: "50%",
                backgroundColor: "gold",
                border: "2px solid gold",
              }}
            />
            {cat.disease}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
