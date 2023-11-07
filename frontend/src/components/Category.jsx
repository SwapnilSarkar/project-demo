import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product_categories/${category.name}`}>
        <Card.Img
          src={category.image}
          variant="top"
          style={{ height: "150px" }}
        />
      </Link>
      <Card.Body>
        <Link to={`/product_categories/${category.name}`}>
          <Card.Title as="div" className="product-title">
            <strong>{category.name}</strong>
          </Card.Title>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Category;
