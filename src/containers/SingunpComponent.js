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
import { useHistory } from "react-router-dom";
import ".././css/SignUpForm.css";
import axios from "axios";
import Cookies from "js-cookie";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();
  const [submit, setSubmit] = useState(false);
  useEffect(() => {
    const createUser = async () => {
      if (password !== reEnterPassword) {
        setError("Passwords don't match");
        return;
      }

      setLoading(true);

      var data = JSON.stringify({
        fullname: name,
        email: email,
        password: password,
      });

      var config = {
        method: "post",
        url: `${process.env.React_App_API_BASE_URL}/v1/user/auth/create-user`,
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

        if (response.status === 201 || response.message === "success") {
          const token = {
            acesstoken: response.data.data.accesstoken,
            refreshtoken: response.data.data.refreshtoken,
          };
          Cookies.set("tokens", JSON.stringify(token), { expires: 7 });
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
    if (password !== reEnterPassword) {
      setError("Passwords don't match");
      return;
    }

    setSubmit(true);
  };

  const handleClose = () => {
    setError(null);
  };

  return (
    <Box className='signup-form-container'>
      <Typography variant='h4' className='signup-form-title'>
        Sign Up
      </Typography>
      <form className='signup-form' onSubmit={handleSubmit}>
        <TextField
          label='Name'
          variant='outlined'
          className='signup-form-input'
          InputProps={{ style: { color: "white" } }}
          InputLabelProps={{ style: { color: "white" } }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <TextField
          label='Re-enter Password'
          type='password'
          variant='outlined'
          className='signup-form-input'
          InputProps={{ style: { color: "white" } }}
          InputLabelProps={{ style: { color: "white" } }}
          value={reEnterPassword}
          onChange={(e) => setReEnterPassword(e.target.value)}
        />
        <Button
          variant='contained'
          color='primary'
          type='submit'
          className='signup-form-button'
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "Sign Up"}
        </Button>
        <a style={{ fontSize: "medium", textAlign: "center" }} href='/'>
          We Know U ?
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

export default SignUpForm;
