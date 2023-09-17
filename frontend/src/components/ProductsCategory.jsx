import React from "react";
import { Image } from "react-bootstrap";
import temp from "../assets/products.png";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

const ProductsCategory = () => {
  return (
    <div>
      <Link to="/products/categories">
        <Image className="pic img" src={temp} alt="Products Category" fluid />
      </Link>
    </div>
  );
};

export default ProductsCategory;
