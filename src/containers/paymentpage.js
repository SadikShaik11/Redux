import axios from "axios";
import React, { useEffect } from "react";
import useRazorpay from "react-razorpay";
import { useState } from "react";
import { useHistory } from "react-router-dom";
const Paymentpage = () => {
  const Razorpay = useRazorpay();
  const history = useHistory();
  const [orderId, setOrderId] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const [rorderId, rsetOrderId] = useState("");
  const [signature, setSignature] = useState("");

  useEffect(() => {
    const order = JSON.parse(localStorage.getItem("order"));

    const getOrderId = async () => {
      var data = JSON.stringify({
        price: order.total,
      });
      var config = {
        method: "post",
        url: "http://localhost:5000/v1/user/payment/razorpayment/create-order",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const result = await axios(config);
      setOrderId(result.data.data.id);
      return result.data.data.id;
    };

    const initializeRazorpay = async () => {
      const id = await getOrderId();
      var options = {
        key: "rzp_test_cyAnPuUdTRoBuU", // Enter the Key ID generated from the Dashboard
        amount: `${order.total * 100}`, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "EPharma",
        description: "Test Transaction",
        image:
          "https://t3.ftcdn.net/jpg/01/06/33/74/360_F_106337464_PqrDoCy2HhtDr6ezOGq13hvpVFcMGpQV.jpg",
        order_id: `${id}`,
        handler: function (response) {
          setPaymentId(response.razorpay_payment_id);
          rsetOrderId(response.razorpay_order_id);
          setSignature(response.razorpay_signature);
          history.push("/payment/success", {
            rorderId,
            paymentId,
          });
        },
        prefill: {
          name: "Epahrma",
          email: "example@gmail.com",
          contact: "9000090000",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var rzp1 = new Razorpay(options);
      rzp1.open();
    };

    initializeRazorpay();
  }, []);

  return <div></div>;
};

export default Paymentpage;
