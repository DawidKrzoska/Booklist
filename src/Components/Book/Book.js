import React from "react";
import { Col, Row, Card, Image, Button } from "react-bootstrap";
import { Star, StarHalf, StarFill } from "react-bootstrap-icons";

import "./Book.css";

function Book(props) {
  function GetStars() {
    if (rating >= 2) {
      rating = rating - 2;
      return <StarFill />;
    } else if (rating === 1) {
      rating = rating - 1;
      return <StarHalf />;
    } else {
      return <Star />;
    }
  }

  props = props.book;
  var rating = props.rating;
  return (
    <Col xs={12} md={6} lg={4} xl={3} className="mt-2 mb-2">
      {" "}
      <Card bg={"light"} border="secondary">
        <Card.Header>
          <Image src={props.src} thumbnail />
        </Card.Header>
        <Card.Body className="pb-4">
          <Row>
            <Col>
              <Card.Title className="text-center">
                <Card.Link className="text-primary font-weight-bolder">
                  {props.title}
                </Card.Link>
              </Card.Title>
            </Col>
          </Row>
          <Row>
            <Col xs={8}>
              <Card.Text>
                <Card.Link
                  className="text-info font-weight-bolder"
                  style={{ position: "relative", top: "7px" }}
                >
                  {props.author}
                </Card.Link>
              </Card.Text>
            </Col>
            <Col xs={4}>
              <Button variant="warning" className="font-weight-normal">
                {props.price}
              </Button>{" "}
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              {GetStars(rating)}
              {GetStars(rating)}
              {GetStars(rating)}
              {GetStars(rating)}
              {GetStars(rating)}
              <label
                style={{ position: "relative", top: "3px", left: "5px" }}
                className="font-italic"
              >
                {props.review}
              </label>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Book;
