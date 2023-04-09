import React from "react";
import ".././css/detailComponent.css";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import Cookies from "js-cookie";
import Rating from "./Rating";
import { addToCart } from "../redux/actions/productsActions";
const ProductCard = () => {
  const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch();
  const { id } = useParams(); // access id parameter from URL
  const location = useLocation(); // access location object
  const product = location.state.product; // access product object
  const [prod, setProd] = useState({});

  useEffect(() => {
    const result = async () => {
      const url = `${process.env.React_App_API_BASE_URL}/v1/user/products/${
        id.split(":")[1]
      }/${product.type}`;
      const token = Cookies.get("auth_token");
      const config = {
        method: "get",
        url: url,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      return axios(config)
        .then(function (response) {
          setProd(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    result();
  }, []);

  const handleAddToCart = async () => {
    const { drugName, price } = prod.data;
    const splitDrugName = drugName.split("/")[0];
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

  const selectedProduct = prod.data;
  return (
    <div className='page-container'>
      {selectedProduct ? (
        <Card className='card-container'>
          <CardMedia
            component='img'
            height='auto'
            width='auto'
            image={selectedProduct.imageUrl}
            alt={selectedProduct.drugName}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {selectedProduct.drugName}
            </Typography>
            <div className='review-container'>
              <Rating rating={selectedProduct.rating} />
            </div>
            <div className='price-container'>
              <p className='price'>Rs {selectedProduct.price}</p>
            </div>
            <Typography>{selectedProduct.description}</Typography>
            <div style={{ marginTop: "20px" }}>
              <Button onClick={handleAddToCart} variant='contained'>
                Add to Cart
              </Button>
              <Button variant='contained'>Buy Now</Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Typography variant='body2' color='text.secondary'>
          No product selected
        </Typography>
      )}
    </div>
  );
};

export default ProductCard;
