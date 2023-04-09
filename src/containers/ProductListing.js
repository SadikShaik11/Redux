import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";
import LeftImage from "./profileComponent";
import SearchComponent from "./searchComponent";
const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const authDetails = useSelector((state) => state.auth);
  localStorage.setItem("auth", JSON.stringify(authDetails));
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (searchKeyword) => {
    setSearchTerm(searchKeyword);
  };

  console.log("Products :", products);
  return (
    <div className='ui grid container'>
      <div className='block inline fixed left-10 top-20'>
        <LeftImage />
      </div>
      <div className='block  h-20 w-50 fixed top-20 right-20 mb-10'>
        <SearchComponent searchKeyword={handleSearch} />
      </div>

      <ProductComponent search={searchTerm} />
    </div>
  );
};

export default ProductPage;
