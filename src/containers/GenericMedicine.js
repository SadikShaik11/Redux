import React from "react";
import { Typography } from "@mui/material";
import { data } from "../assest";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardComponent from "./CardComponent";
import ".././css/HomePage.css";
const Heading = () => {
  return <Typography className='side-heading'>Generic Medicine</Typography>;
};

const Items = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {data.map((item) => (
        <CardComponent
          id={item.id}
          drugName={item.drugName}
          price={item.price}
          image={item.image}
          rating={item.rating}
          type='medicine'
          imageUrl={
            "https://img.freepik.com/free-vector/realistic-vitamin-complex-package_52683-37395.jpg?size=626&ext=jpg&ga=GA1.2.1789369366.1680874135&semt=ais"
          }
        />
      ))}
    </Slider>
  );
};

const GenericMedicine = () => {
  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <Heading />
      <Items />
    </div>
  );
};

export default GenericMedicine;
