import React from "react";
import { Image } from "react-bootstrap";
import temp from "../assets/services.jpeg";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

const ServicesCategory = () => {
  return (
    <div>
      <Link to="/services">
        <Image className="pic img" src={temp} alt="Services Category" fluid />
      </Link>
    </div>
  );
};

export default ServicesCategory;
