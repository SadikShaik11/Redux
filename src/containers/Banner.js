import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  carouselImage: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  carouselItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.secondary.main,
    height: "400px",
    [theme.breakpoints.down("sm")]: {
      height: "250px",
    },
  },
}));

const images = [
  "https://img.freepik.com/premium-photo/pill-blisters-shopping-pink-trolley-blue-background-pharmacy-store-banner_348487-512.jpg?w=1380",
  "https://img.freepik.com/free-photo/collection-beauty-products-with-copy-space_23-2148620110.jpg?w=1380&t=st=1680874524~exp=1680875124~hmac=ad2a6c313cd692cacebeab91a0dcfae73ca759616e4f75fc74295c4474c11359",
  "https://img.freepik.com/free-photo/grapefruit-oil-serum-bottle-put-green-light-background_1150-28094.jpg?w=1380&t=st=1680762249~exp=1680762849~hmac=0039e142526a8c897c453ef1ac5b99c55e7a80de9ddf77147bfc03be5275a15d",
];

const Image = ({ url }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.carouselItem}>
      <img src={url} alt='carousel-item' className={classes.carouselImage} />
    </Paper>
  );
};

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay={true}
      animation='fade'
      interval={5000}
      timeout={1000}
      navButtonsAlwaysVisible={true}
      style={{ width: "1000px", height: "400px" }}
    >
      {images.map((image, index) => (
        <Image key={index} url={image} />
      ))}
    </Carousel>
  );
};

const Banner = () => {
  return <MyCarousel />;
};

export default Banner;
