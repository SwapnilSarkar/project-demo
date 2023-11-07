import React from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
//import products from "../Data/products";
import Product from "../components/Product";
import axios from "axios";

const ProductListScreen = () => {
  const [products, setProducts] = useState([]);

  const { category: productCategory } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(
        `/api/product_categories/${productCategory}`
      );
      setProducts(data);
    };

    fetchProducts();
  }, []);

  // console.log(productCategory);
  // //console.log(products);
  // const productList = products.filter((p) => {
  //   console.log(p.category, productCategory);
  //   return p.category.toLowerCase() === productCategory.toLowerCase();
  // });
  // console.log(products);

  // const subProducts = new Array();

  // products.map((product) => {
  //   if (productCategory === product.category) {
  //     subProducts.push(product);
  //   }
  // });
  // console.log(subProducts);

  return (
    <>
      <h1>ProductListScreen</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.name} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ProductListScreen;
