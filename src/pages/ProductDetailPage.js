import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ".././css/detailComponent.css";
import ProductCard from "../containers/ProductDetailComponent";
import PincodeSearch from "../containers/PincodeSearch";
import Header from "../containers/Header";
const ProductDetailPage = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <Header />
      <div className='page-container'>
        {isLoading ? (
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <div class='lds-hourglass'>loading</div>
          </div>
        ) : (
          <>
            <ProductCard />
            <PincodeSearch />
          </>
        )}
      </div>
    </>
  );
};

ProductDetailPage.propTypes = {};

export default ProductDetailPage;
