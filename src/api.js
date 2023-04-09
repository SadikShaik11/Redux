import axios from "axios";

const API_BASE_URL = "http://localhost:5000";

export const signIn = async (email, password) => {
  const config = {
    headers: { devicetype: "web", devicehash: "abcd" },
  };
  const bodyParameters = { email, password };

  const response = axios.post(
    `${API_BASE_URL}/v1/user/auth/signin`,
    bodyParameters,
    config
  );
  return response.data;
};

// add more API request functions here
