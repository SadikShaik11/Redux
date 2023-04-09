import React from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setLoginDetails } from "../redux/actions/authActions"; // Import the action creator
import ".././css/SignUpForm.css";
import axios from "axios";
import Cookies from "js-cookie";

const Signin = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();
  const [submit, setSubmit] = useState(false);
  useEffect(() => {
    const createUser = async () => {
      setLoading(true);

      var data = JSON.stringify({
        email: email,
        password: password,
      });
      // console.log(process.env.React_App_API_BASE_URL);
      var config = {
        method: "post",
        url: `${process.env.React_App_API_BASE_URL}/v1/user/auth/signin`,
        headers: {
          devicetype: "ios",
          devicehash: "abcd",
          "Content-Type": "application/json",
        },
        data: data,
      };

      try {
        const response = await axios(config);
        setLoading(false);

        if (response.status === 200 || response.message === "success") {
          const token = response.data.data.accessToken;
          Cookies.set("auth_token", token, { expires: 7 });
          dispatch(setLoginDetails({ email }, history));

          history.push("/home");
        } else {
          setError("Error signing up. Please try again.");
        }
      } catch (error) {
        setLoading(false);
        setError(`${error.data.message}`);
      }

      setLoading(false);
    };

    if (submit) {
      createUser();
      setSubmit(false);
    }
  }, [submit]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmit(true);
  };

  const handleClose = () => {
    setError(null);
  };

  return (
    <Box className='signup-form-container'>
      <Typography variant='h4' className='signup-form-title'>
        Sign in
      </Typography>
      <form className='signup-form' onSubmit={handleSubmit}>
        <TextField
          label='Email'
          variant='outlined'
          className='signup-form-input'
          InputProps={{ style: { color: "white" } }}
          InputLabelProps={{ style: { color: "white" } }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label='Password'
          type='password'
          variant='outlined'
          className='signup-form-input'
          InputProps={{ style: { color: "white" } }}
          InputLabelProps={{ style: { color: "white" } }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant='contained'
          color='primary'
          type='submit'
          className='signup-form-button'
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "Sign in"}
        </Button>
        <a style={{ fontSize: "medium", textAlign: "center" }} href='/signup'>
          New to the website ?
        </a>
      </form>
      <Snackbar
        open={error !== null}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity='error'>
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Signin;
