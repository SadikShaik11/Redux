import React, { useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import ".././css/detailComponent.css";
import Cookies from "js-cookie";
const PincodeSearch = () => {
  const [pincode, setPincode] = useState("");
  const [loading, setLoading] = useState(false);
  const [pincodeDetails, setPincodeDetails] = useState(null);

  const handlePincodeChange = (e) => {
    setPincode(e.target.value);
  };

  const handleSearch = async () => {
    console.log('clicked');
    setLoading(true);
    try {
      const authToken = Cookies.get("auth_token");
      const response = await axios.get(
        `${process.env.React_App_API_BASE_URL}/v1/user/products/pincode-avaiability/${pincode}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      const result = response.data.data[0].PostOffice
        ? `${response.data.data[0].PostOffice[0].Name} ,${response.data.data[0].PostOffice[0].Block} ,${response.data.data[0].PostOffice[0].State} `
        : response.data.Message;
      console.log(response.data.data[0].PostOffice);
      setPincodeDetails(result);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
    setPincode("");
  };
  const today = new Date();
  const twoDaysLater = new Date(
    today.getTime() + 7 * 24 * 60 * 60 * 1000
  ).toDateString();
  return (
    <div className='pincode-search-container'>
      <div className='pincode-search'>
        <input
          className='pincode-input'
          type='text'
          value={pincode}
          placeholder='Enter Pincode'
          onChange={handlePincodeChange}
        />
        <button className='search-button' onClick={handleSearch}>
          {loading ? <CircularProgress size={24} /> : "check"}
        </button>
      </div>
      {pincodeDetails && (
        <div className='pincode-details'>
          <p>
            {`${JSON.parse(JSON.stringify(pincodeDetails))}`}{" "}
            <span style={{ color: "red" }}>
              The order will be delivered to this pincode on {`${twoDaysLater}`}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default PincodeSearch;
