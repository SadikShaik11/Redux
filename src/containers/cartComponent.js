import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/actions/productsActions";
import Button from "@mui/material/Button";
import ".././css/cart.css";
import { useEffect } from "react";
import ErrorBoundary from "./error";
import { useState } from "react";
import { useHistory } from "react-router-dom";
const CartComponent = ({ cartAction }) => {
  const history = useHistory();
  //   const [cartAction, setCartAction] = React.useState(false);
  const cartItems = useSelector((state) => state.add_cart.cartItems);
  const [Price, setPrice] = useState(0);
  const dispatch = useDispatch();
  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };
  useEffect(() => {
    if (cartItems.length > 0) {
      const newPrice = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      setPrice(newPrice);
    } else {
      setPrice(0);
    }
  }, [cartItems]);
  const handleClick = (e) => {
    e.preventDefault();
    history.push("/checkout");
  };
  return (
    <ErrorBoundary>
      <div className='cart'>
        <div className='cart-header'>
          <h2>Shopping Cart</h2>
        </div>
        <div className='cart-items'>
          {cartItems ? (
            cartItems.map((item) => (
              <div key={item.id} className='cart-item'>
                <div className='item-info'>
                  <p className='item-name'>{item.name.split(" ")[0]}</p>
                  <p className='item-price'>{`$${
                    item.price.toFixed(2) * item.quantity
                  }`}</p>
                </div>
                <div className='item-quantity'>
                  <Button onClick={() => handleIncreaseQuantity(item.id)}>
                    +
                  </Button>
                  <p>{item.quantity}</p>
                  <Button onClick={() => handleDecreaseQuantity(item.id)}>
                    -
                  </Button>
                </div>
                <Button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className='remove-button'
                >
                  Remove
                </Button>
              </div>
            ))
          ) : (
            <p>No items in cart</p>
          )}
        </div>
        <div className='cart-total'>
          <p>Total: Rs{Price}</p>
        </div>
        <div className='cart-checkout'>
          <Button
            onClick={handleClick}
            variant='contained'
            color='primary'
            size='large'
          >
            Checkout
          </Button>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default CartComponent;
