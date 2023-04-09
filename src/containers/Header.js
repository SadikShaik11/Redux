import React from "react";
import NavBar from "./NavBar";
const Header = ({show}) => {
  return (
    <div >
      <NavBar show={show} />
    </div>
  );
};

export default Header;
