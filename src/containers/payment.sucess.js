import React from "react";
import { useHistory } from "react-router-dom";

const Success = () => {
  const history = useHistory();
  return (
    <div
      style={{
        marginRight: "30%",
        marginLeft: "30%",
        justifyContent: "center",
      }}
    >
      <img
        src='https://img.freepik.com/free-vector/order-confirmed-concept-illustration_114360-1486.jpg?w=740&t=st=1681065131~exp=1681065731~hmac=a146ac6d4051df833192b10b16df8ac4d6158263d18831eda429f2bb97c35d83'
        alt=''
        srcset=''
      />
      <p style={{ textAlign: "center", fontSize: "medium" }}>
        {" "}
        your order was placed , you will get recieve email of your order booking
        soon
      </p>
      <button
        onClick={(e) => {
          history.push("/home");
        }}
        style={{
          background: "red",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
          justifySelf: "center",
          alignSelf: "center",
          display: "block",
          margin: "auto",
        }}
      >
        Home
      </button>
    </div>
  );
};

export default Success;
