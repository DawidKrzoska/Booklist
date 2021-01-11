import React from "react";
import Book from "../Book/Book";
import Header from "../Header/Header";
import { Container, Row } from "react-bootstrap";
import "./Booklist.css";

const Books = [
  {
    src:
      "https://media.newyorker.com/photos/5fc53ead04d5eeb69d5bb23a/master/w_1600%2Cc_limit/TNY-BestBooks2020-Serpell.jpg cap",
    title: "Stranger Faces",
    author: " Namwali Serpell",
    price: "29.99$",
    rating: "9",
    review: "45412",
  },
  {
    src:
      "https://media.newyorker.com/photos/5fc53ead0013a5ddc52c0dfc/master/w_1600%2Cc_limit/TNY-BestBooks2020-StegerStrong.jpg cap",
    title: "Want",
    author: "Lynn Steger Strong",
    price: "25.99$",
    rating: "8",
    review: "13787",
  },
  {
    src:
      "https://media.newyorker.com/photos/5fc53ea85fc79395b74d1779/master/w_1600%2Cc_limit/TNY-BestBooks2020-Callard.jpg cap",
    title: "On Anger",
    author: "Agnes Callard",
    price: "27.99$",
    rating: "8",
    review: "31567",
  },
  {
    src:
      "https://media.newyorker.com/photos/5fc53eab8da8d370616d2ad2/master/w_1600%2Cc_limit/TNY-BestBooks2020-MorenoGarcia.jpg cap",
    title: "Mexican Gothic",
    author: "Silvia Moreno-Garcia",
    price: "23.99$",
    rating: "9",
    review: "26128",
  },
];

function Booklist() {
  return (
    <Container fluid className="backGround">
      <Header />
      <Row>
        {Books.map((book, index) => {
          return <Book key={index} book={book} />;
        })}
      </Row>
    </Container>
  );
}

export default Booklist;
