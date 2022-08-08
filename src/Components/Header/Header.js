import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import { BrowserRouter as Link } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

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
            <NavLink as={Link} to={"/"}>
              Home
            </NavLink>
            <NavLink as={Link} to={"/products"}>
              Products
            </NavLink>
            <NavLink as={Link} to={"/Contact"}>
              Contact
            </NavLink>
            <NavLink as={Link} to={"/Cart"} className="cart">
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
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemes;
