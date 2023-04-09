import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme, styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider } from "@material-ui/core/styles";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import Rating from "./Rating";
import ".././css/HomePage.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addToCart } from "../redux/actions/productsActions";
const CardComponent = (imageObject) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { drugName, imageUrl, price, rating, id, description, type } =
    imageObject;

  const splitDrugName = drugName.split("/")[0];
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const AnimatedCard = styled(Card)({
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  });

  const openDescription = async () => {
    const product = { drugName, imageUrl, price, rating, description, type };
    history.push(`/product:${id}`, { product });
  };
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = async () => {
    // Create a new item object
    const newItem = {
      id,
      name: splitDrugName,
      price: price ? price : 233,
      quantity: 1,
    };

    // Check if the item is already in the cart
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === newItem.id
    );
    if (existingItemIndex !== -1) {
      // If the item is already in the cart, update the quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      // If the item is not in the cart, add it as a new item
      const updatedCartItems = [...cartItems, { ...newItem, quantity: 1 }];
      setCartItems(updatedCartItems);
    }
    // console.log(newItem);
    dispatch(addToCart(newItem));
  };
  return (
    <ThemeProvider theme={theme}>
      <div style={{ margin: "10px" }}>
        <AnimatedCard
          onClick={openDescription}
          sx={{
            maxWidth: "100%",
            borderRadius: "12px",
            border: "1px solid #FFF",
            boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
            overflow: "hidden",
            marginBottom: "20px",
            height: matches ? "200px" : "300px",
          }}
        >
          <CardMedia
            sx={{
              height: matches ? "120px" : "200px",
              width: "100%",
              objectFit: "cover",
            }}
            image={`${imageUrl}`}
            title='green'
          />
          <CardContent>
            <Typography
              gutterBottom
              component='div'
              className='drugName'
              style={{ fontSize: matches ? "1rem" : "1.2rem" }}
            >
              {splitDrugName}
            </Typography>
            <Rating rating={rating} style={{ width: "20px" }} />
            <Typography gutterBottom variant='h6' component='span'>
              ₹ {price ? price : 233}
            </Typography>
          </CardContent>
          <Button
            onClick={handleAddToCart}
            variant='twotoned'
            style={{
              animation: "none",
              backgroundColor: "orange",
              position: "absolute",
              bottom: "2px",
              right: "2px",
              opacity: 1, // Add this property to make the button always visible
            }}
          >
            <ShoppingCartTwoToneIcon />
          </Button>
          image
        </AnimatedCard>
      </div>
    </ThemeProvider>
  );
};

export default CardComponent;
