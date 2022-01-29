import React from "react";
import { Button, Carousel, Image } from "react-bootstrap";
import books from "../../../ASSETS/images/books.jpg";
import book from "../../../ASSETS/images/book.jpg";
import library from "../../../ASSETS/images/library.jpg";
let imageArray = [books, book, library];

function SlideShow() {
  var textStyle = {
    position: "absolute",
    top: "10%",
    padding: "10%",
  };
  return (
    <section>
      <div style={{ width: "100%", height: "400px" }}>
        <Carousel interval={3000} indicators="false">
          {imageArray.map((element, i) => {
            return (
              <Carousel.Item className="hello">
                <img
                  className="d-block w-100"
                  src={element}
                  alt={`carousel${i}`}
                  style={{ opacity: 1, height: "600px" }}
                />
                <div style={textStyle}>
                  <h1 style={{ color: "white" }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </h1>
                  <p>
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.
                  </p>
                  <Button>Join US</Button>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}

export default SlideShow;
