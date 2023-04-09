import React from "react";
import SignUpForm from "../containers/SingunpComponent";
import ".././css/signinPage.css";
import Signin from "../containers/Signin.js";
const SigninPage = ({ type }) => {
  return (
    <div className='Signin'>
      <>
        <div className='content-container'>
          <div className='consultant-img-container'>
            <img
              className='consultant-img'
              src='https://img.freepik.com/free-vector/videocalling-with-therapist-concept_23-2148526937.jpg?size=626&ext=jpg&ga=GA1.1.834064274.1680606801&semt=sph'
              alt='consultatnt'
            />
          </div>
          <div className='description-container'>
            <h2 className='description-title'>
              Welcome to Our Medicine Website
            </h2>
            <p className='description-text'>
              We provide a comprehensive platform for all your medical needs.
              Explore our wide range of products and get expert advice from our
              dedicated team of professionals. Join us and experience the best
              in healthcare services.
            </p>
          </div>
        </div>
        {type ? <SignUpForm /> : <Signin />}
      </>
    </div>
  );
};

export default SigninPage;
