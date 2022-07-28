import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About";
import Contact from "../Contact";
import Products from "../../Products/Products";
import Filter from "../../Products/Filter";
import Cart from "../../Pages/Cart/Cart";

//import Cart from "./Pages/Cart";
import "./Header.css";

export function ColorSchemes(props) {
  return (
    <Router>
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
              <Nav.Link as={Link} to={"/home"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/About"}>
                About
              </Nav.Link>

              <Nav.Link as={Link} to={"/Filter"}>
                Products
              </Nav.Link>
              <Nav.Link as={Link} to={"/Contact"}>
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to={"/Cart"} className="headline">
                <div class="cart-icon">
                  <img
                    src="https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_shopping_cart_white_24px.svg"
                    alt="Cart Icon"
                  />
                  <span class="badge">0</span>
                </div>
                <div>
                  <span class="badge">0</span>
                </div>
                Cart{" "}
                {props.countCartItems ? (
                  <button className="badge">{props.countCartItems}</button>
                ) : (
                  ""
                )}
              </Nav.Link>
              {/* <div className="headline">
                <div class="cart-icon">
                  <img
                    src="https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_shopping_cart_white_24px.svg"
                    alt="Cart Icon"
                  />
                  <span class="badge">0</span>
                </div>
                <div>
                  <a href="#../Cart/Cart">
                    Cart{" "}
                    {props.countCartItems ? (
                      <button className="badge">{props.countCartItems}</button>
                    ) : (
                      ""
                    )}
                  </a>{" "}
                </div>
              </div> */}
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Products" element={<Products />} />
          <Route exact path="/Filter" element={<Filter />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/Cart" element={<Cart />} />
        </Routes>
      </>
    </Router>
  );
}

export default ColorSchemes;
