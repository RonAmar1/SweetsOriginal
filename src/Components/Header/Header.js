import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Link } from "react-router-dom";

//import Cart from "./Pages/Cart";
import "./Header.css";

export function ColorSchemes({ badge }) {
  return (
    <>
      <div className="header">
        <hr></hr>
        <h1>LILACH'S SWEETS</h1>
        <h4>by Lilach Amar</h4>
        <hr></hr>
      </div>
      <br />
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">Lilach's Sweets</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={"/products"}>
              Products
            </Nav.Link>
            <Nav.Link as={Link} to={"/Contact"}>
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to={"/Cart"} className="cart">
              <div>
                <img
                  src="https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_shopping_cart_white_24px.svg"
                  alt="Cart Icon"
                />
                <span className="badge">{badge}</span>
              </div>

              {/* Cart{" "}
              {/* {props.countCartItems ? (
                <button className="badge">{props.countCartItems} onAdd={onAdd}</button>
              ) : (
                "" */}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemes;
