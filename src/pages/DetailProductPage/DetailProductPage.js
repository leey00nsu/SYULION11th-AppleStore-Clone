import React from "react";
import { useState } from "react";
import ProductInfo from "./ProductInfo";
import { Col, Row } from "react-bootstrap";
import { items } from "../LandingPage/LandingPage";
import { useParams } from "react-router-dom";

const DetailProductPage = () => {
  const Params = useParams();
  const productId = Params.productId;

  const item = items[productId - 1];

  return (
    <div className="pageWrapper">
      <Row>
        <Col md>
          <div>
            <img
              style={{ width: "100$" }}
              src={item.thumbnail}
              alt={item.name}
            />
          </div>
        </Col>
        <Col md>
          <ProductInfo item={item} />
        </Col>
      </Row>
    </div>
  );
};

export default DetailProductPage;
