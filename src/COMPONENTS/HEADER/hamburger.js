import react from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../../styles/Navbar/Navbar.css";
import donate from "../../ASSETS/donate-vector.png";

function hamburger() {
  return (
    <>
      <Navbar collapseOnSelect fixed="top" expand="sm" bg="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar" />
          <Navbar.Collapse id="responsive-navbar" />
          <Nav>
            <ul
              class="nav-links"
              id="links"
              style={{ position: "relative", right: "3%" }}
            >
              <li>
                <Nav.Link to="/saktiweek">Projects</Nav.Link>
              </li>
              <li>
                <Nav.Link to="/saktiweek">Gallery</Nav.Link>
              </li>
              <li>
                <Nav.Link to="/saktiweek">Blog</Nav.Link>
              </li>
              <li>
                <Nav.Link to="/saktiweek">Team</Nav.Link>
              </li>
              <li>
                <Nav.Link to="/saktiweek">Library</Nav.Link>
              </li>
              <li>
                <Nav.Link to="/join_us">Join Us</Nav.Link>
              </li>
              <li>
                <Nav.Link to="/saktiweek" style={{ zIndex: "3" }}>
                  Donate
                </Nav.Link>
              </li>
              <img src={donate} alt="..." />
            </ul>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default hamburger;
