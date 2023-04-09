import React from "react";
import { Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardComponent from "./CardComponent";
import ".././css/HomePage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
const Heading = () => {
  return <Typography className='side-heading'>Cosmetics</Typography>;
};

const Items = () => {
  const [cosmetic, setCosmo] = useState([]);

  useEffect(() => {
    const getCosmo = async () => {
      const token = Cookies.get("auth_token");
      var config = {
        method: "get",
        url: `${process.env.React_App_API_BASE_URL}/v1/user/products/?page=1&limit=15&type=cosmo`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios(config);
      setCosmo(response.data.data.results);
    };
    getCosmo();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
      {cosmetic &&
        cosmetic.map((item) => (
          <CardComponent
            key={item.id} // Add key prop with unique identifier for each component
            drugName={item.drugName.split(" ")[0]}
            price={item.price}
            image={item.image}
            rating={item.rating}
            imageUrl={item.imageUrl}
            description={item.description}
            id={item.id}
            type='cosmetic'
          />
        ))}
    </Slider>
  );
};

const Cosmetics = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Heading />
      <Items />
    </div>
  );
};
export default Cosmetics;
