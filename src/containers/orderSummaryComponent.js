import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import ErrorBoundary from "./error";
import { useSelector } from "react-redux";

const OrderSummaryComponent = () => {
  const cart = useSelector((state) => state.add_cart.cartItems);
  console.log(cart);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const fetchCartData = async (cartItems) => {
    try {
      const token = Cookies.get("auth_token");
      const config = {
        method: "POST",
        url: `${process.env.React_App_API_BASE_URL}/v1/user/products/calculate-cart`,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data: {
          Cart: cart,
        },
      };
      const response = await axios(config);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  useEffect(() => {
    async function fetchAndSetCartData() {
      const cartData = await fetchCartData(cartItems);
      localStorage.setItem("order", JSON.stringify(cartData));
      setCartItems(cartData.FinalCart);
      setTotal(cartData.total);
    }
    fetchAndSetCartData();
  }, [cart]);

  return (
    <div>
      <div
        style={{
          width: "600px",
          minHeight: "550px",
          margin: "20px",
          borderRadius: "20px",
          background: "linear-gradient(to bottom, #ffffff, #f0f0f0)",
        }}
      >
        <ErrorBoundary>
          <div className='order-summary' style={{ padding: "30px" }}>
            <h2 style={{ marginBottom: "20px", textAlign: "center" }}>
              Order Summary
            </h2>
            <table style={{ borderCollapse: "collapse", width: "100%" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #ddd" }}>
                  <th style={{ padding: "10px" }}></th>
                  <th style={{ padding: "10px" }}></th>
                  <th style={{ padding: "10px" }}></th>
                  <th style={{ padding: "10px" }}></th>
                  <th style={{ padding: "10px" }}></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td style={{ padding: "10px" }}>{item.drugName}</td>
                    <td style={{ padding: "10px" }}>
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                          borderRadius: "5px",
                        }}
                      />
                    </td>
                    <td style={{ padding: "10px" }}>{item.price}</td>
                    <td style={{ padding: "10px" }}>{item.quantity}</td>
                    <td style={{ padding: "10px" }}>
                      {(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td
                    style={{ padding: "10px", fontWeight: "bold" }}
                    colSpan='3'
                  >
                    Total
                  </td>
                  <td style={{ padding: "10px", fontWeight: "bold" }}>
                    {total}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </ErrorBoundary>
      </div>

      <div
        style={{
          width: "100%",
          marginTop: "50px",
          margin: "20px",
          display: "flex",
          alignItems: "center",
          borderRadius: "20px",
          background: "linear-gradient(to bottom, #ffffff, #f0f0f0)",
        }}
      >
        <img
          style={{
            height: "150px",
            width: "300px",
            marginRight: "20px",
          }}
          src='https://d3jlwjv6gmyigl.cloudfront.net/images/2021/11/Thumbnail-2.O-delhivery.png'
          alt='delhivery'
          srcset=''
        />
        <p
          style={{
            color: "black",
            fontSize: "large",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: "lighter",
          }}
        >
          Your order will be delivered by Delhivery
        </p>
      </div>
    </div>
  );
};

export default OrderSummaryComponent;
