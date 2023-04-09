import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const DeliveryAddressComponent = () => {
  const [fullName, setFullName] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    var x = localStorage.getItem("order");
    e.preventDefault();
    history.push("/payment");
    
    // do something with the address data
  };

  return (
    <div
      style={{ width: "500px", marginRight: "50px" }}
      className='delivery-address'
    >
      <h2>Delivery Address</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type='text'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </label>
        <label>
          Address Line 1:
          <input
            type='text'
            value={addressLine1}
            onChange={(e) => setAddressLine1(e.target.value)}
            required
          />
        </label>
        <label>
          Address Line 2:
          <input
            type='text'
            value={addressLine2}
            onChange={(e) => setAddressLine2(e.target.value)}
          />
        </label>
        <label>
          City:
          <input
            type='text'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </label>
        <label>
          State:
          <input
            type='text'
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </label>
        <label>
          Zip Code:
          <input
            type='text'
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            required
          />
        </label>
        <button style={{ marginTop: "50px" }} type='submit'>
          Proceed to pay
        </button>
      </form>
      <style jsx>{`
        .delivery-address {
          background: linear-gradient(to bottom, #ffffff, #f1f1f1);
          padding: 2rem;
          border-radius: 1rem;
          //   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }
        form {
          display: flex;
          flex-direction: column;
        }
        label {
          margin-top: 1rem;
          display: flex;
          flex-direction: column;
        }
        input {
          padding: 0.5rem;
          border-radius: 0.5rem;
          border: none;
          margin-top: 0.5rem;
        }
        button {
          background-color: #4caf50;
          color: white;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 0.5rem;
          margin-top: 1rem;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default DeliveryAddressComponent;
