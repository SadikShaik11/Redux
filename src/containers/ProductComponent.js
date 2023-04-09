import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LeftImage from "./profileComponent";
const ProductComponent = ({ search }) => {
  const [searchedProducts, setSearchedProducts] = useState([]);
  useEffect(() => {
    const fetchSearchedProducts = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/category/${search}`
        );
        setSearchedProducts(response.data);
      } catch (error) {
      }
    };

    fetchSearchedProducts();
  }, [search]);
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <>
        <div className='three wide column' key={id}>
          <Link to={`/product/${id}`}>
            <div className='ui link cards'>
              <div className='card'>
                <div className='image'>
                  <img src={image} alt={title} />
                </div>
                <div className='content'>
                  <div className='header'>{title}</div>
                  <div className='meta price'>$ {price}</div>
                  <div className='meta'>{category}</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </>
    );
  });
  const renderListSearched =
    searchedProducts.length > 0 &&
    searchedProducts.map((product) => {
      const { id, title, image, price, category } = product;
      return (
        <>
          <div className='three wide column' key={id}>
            <Link to={`/product/${id}`}>
              <div className='ui link cards'>
                <div className='card'>
                  <div className='image'>
                    <img src={image} alt={title} />
                  </div>
                  <div className='content'>
                    <div className='header'>{title}</div>
                    <div className='meta price'>$ {price}</div>
                    <div className='meta'>{category}</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </>
      );
    });
  return <>{searchedProducts.length > 0 ? renderListSearched : renderList}</>;
};

export default ProductComponent;
