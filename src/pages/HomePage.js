import React from "react";
import Banner from "../containers/Banner";
import Cosmetics from "../containers/Cosmetics";
import GenericMedicine from "../containers/GenericMedicine";
import Categories from "../containers/Categories";
import ".././css/HomePage.css";
import Header from "../containers/Header";
const HomePage = () => {
  return (
    <>
      <Header style={{ margin: 0 }} />
      <div className='root-container' style={{ height: "100%" }}>
        <Banner />
        <div style={{ flexDirection: "row-reverse" }}>
          <div>
            <Categories />
          </div>
          <div className='medicine-container' style={{ marginLeft: "330px" }}>
            <GenericMedicine />
            <Cosmetics />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
