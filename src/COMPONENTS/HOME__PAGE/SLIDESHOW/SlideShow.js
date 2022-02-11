import React from "react";
import { Button, Carousel, Image } from "react-bootstrap";
import books from "../../../ASSETS/images/books.jpg";
import book from "../../../ASSETS/images/book.jpg";
import library from "../../../ASSETS/images/library.jpg";
import "./slideShow.css";
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

function SlideShow() {
  return (
    <section>
      <Carousel interval={3000} indicatorLabels={false} controls={false}>
        {imageArray.map((element, i) => {
          return (
            <Carousel.Item style={{ height: "100vh" }}>
              <div
                className="bg-image"
                style={{
                  backgroundImage: `url(${element.src})`,
                  opacity: "0.5",
                }}
              />
              <div className="bg-background">
                <div className="bg-textdiv">
                  <div className="bg-text">
                    <h1>{element.header}</h1>
                    <p>{element.content}</p>
                    <div className="joinUsDiv">
                      <div className="joinUs">
                        <Link to="/join_us">Join Us</Link>
                      </div>
                    </div>
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

export default SlideShow;
