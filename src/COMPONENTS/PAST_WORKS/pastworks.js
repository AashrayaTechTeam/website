import React from "react";
import { Button, Carousel, Image,Row,Col } from "react-bootstrap";
import books from "../../ASSETS/images/books.jpg";
import book from "../../ASSETS/images/book.jpg";
import library from "../../ASSETS/images/library.jpg";
import { Link } from "react-router-dom";
let imageArray = [
  {
    src: books,
    content:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    header:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    src: book,
    content:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    header:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    src: library,
    content:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    header:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

function PastWorks() {
  return (
    <section>
    <div style={{background:"black" , width:"100%" , height:"90vh" ,position:"absolute"}}></div>
      <Carousel interval={3000}>
        {imageArray.map((element, i) => {
          return (
            <Carousel.Item style={{ height: "90vh" }}>
              <div
                className="bg-image"
                style={{ backgroundImage: `url(${element.src})`, opacity:"0.5" }}
              />
              <div className="bg-background">
                <div className="bg-textdiv">
                    
                  <div className="bg-text">
                      <Row className="mb-5">
                          <Col xs="12"><h1 style={{ color: "white" }}>
                          Our Past Works
                          </h1>
                          </Col>
                      </Row>
                  <Row>
                        <Col xs="6">
                        <h3 style={{ color: "white" }}>{element.header}</h3>
                    <p>{element.content}</p>
                        </Col>
                        <Col xs="6">
                        <img class="rounded ml-5" style={{ height: "30vh" }} src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
                        </Col>
                    </Row>
                 
                   
                  </div>
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}

export default PastWorks;
