import React from "react";
import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import categories from "../Data/categories";
import Category from "../components/Category";

const ProductCategoriesScreen = () => {
  return (
    <>
      <h1>Product Categories</h1>
      <Row>
        {categories.map((category) => (
          <Col key={category.name} sm={12} md={6} lg={4} xl={3}>
            <Category category={category} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ProductCategoriesScreen;
