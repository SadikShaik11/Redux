// import Cookies from "js-cookie";
// import axios from "axios";

import React from "react";
import DeliveryAddressComponent from "../containers/AddressComponent";
import Header from "../containers/Header";
import OrderSummaryComponent from "../containers/orderSummaryComponent";

const checkoutPage = () => {
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          marginTop: "30px",
        }}
      >
        <div className='orderSummary'>
          <OrderSummaryComponent />
        </div>
        <div className='delivery-container'>
          <DeliveryAddressComponent />
        </div>
      </div>
    </div>
  );
};

export default checkoutPage;
