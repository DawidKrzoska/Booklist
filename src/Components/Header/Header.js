import React from "react";
import { Col, Row } from "react-bootstrap";
import { AppIndicator } from "react-bootstrap-icons";
import "./Header.css";

function Header() {
  return (
    <Row className="fullview">
      {" "}
      <Col className="text-center font-weight-bold pt-3 pb-3">
        <AppIndicator /> React Book List
      </Col>
    </Row>
  );
}

export default Header;
