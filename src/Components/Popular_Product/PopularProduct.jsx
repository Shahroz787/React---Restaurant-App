import React from "react";

import { Container, Row, Col } from "reactstrap";
import { popularMenuFood } from "../../assets/Product-Data/ProductData";
import ProductCard from "../Product_Card/ProductCard";
import "./PopularProduct.css";

const PopularProduct = () => {
  return (
    <>
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <h2 className="popular_product_title">Popular food menu</h2>
            </Col>

            {popularMenuFood.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PopularProduct;
