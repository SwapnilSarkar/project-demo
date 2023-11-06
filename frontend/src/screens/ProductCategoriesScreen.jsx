import React from "react";
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
//import categories from "../Data/categories";
import Category from "../components/Category";
import axios from "axios";

const ProductCategoriesScreen = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await axios.get("/api/Categories");
      setCategories(data);
    };

    fetchCategories();
  }, []);

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
