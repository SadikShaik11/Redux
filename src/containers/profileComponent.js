import { logDOM } from "@testing-library/react";
import React from "react";
import { useSelector } from "react-redux";
const LeftImage = () => {
  const authDetails = JSON.parse(localStorage.getItem("auth"));
  const { email, password } = authDetails.authDetails;
  return (
    <div
      style={{
        postion: "fixed",
        left: "10px",
        margin: "0px",
        padding: "20px",
      }}
    >
      <img
        src='https://as2.ftcdn.net/v2/jpg/04/83/90/95/1000_F_483909569_OI4LKNeFgHwvvVju60fejLd9gj43dIcd.jpg'
        alt='Left Image'
        style={{ width: "10%", borderRadius: "50%" }}
      />
      <p style={{ color: 'white' ,padding:'10px'}}>{email}</p>
    </div>
  );
};

export default LeftImage;
