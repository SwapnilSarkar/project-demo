import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ImageSlider from "../components/ImageSlider";
import ProductsCategory from "../components/ProductsCategory";
import ServicesCategory from "../components/ServicesCategory";

const HomeScreen = () => {
  return (
    <>
      <Container>
        <Row>
          <ImageSlider />
        </Row>
        <Row>
          <Col>
            <ProductsCategory />
          </Col>
          <Col>
            <ServicesCategory />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeScreen;
