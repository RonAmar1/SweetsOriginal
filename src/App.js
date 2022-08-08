import React from "react";
import Header from "./Components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Cart from "./Components/Cart/Cart";
import Menu from "./Components/Menu/Menu";
import cake from "./Components/Menu/Products.json";
import cakes from "./Components/Menu/Products.json";
import { useState } from "react";
import { useEffect } from "react";

const allCategories = ["All", ...new Set(cakes.map((item) => item.category))];

function App() {
  const { products } = cake;
  const [cartItems, setCartItems] = useState([]);
  const [arrInit, setArrInit] = useState([]);
  const [menuItem, setMenuItem] = useState([]);
  const [badge, setBadge] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/Products")
      .then((res) => res.json())
      .then((Products) => {
        setMenuItem(Products);
        console.log(menuItem);
        setArrInit(Products);
      });
  }, []);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) => {
          if (x.id === product.id) {
            const newBadge = badge + 1;
            setBadge(newBadge);
            return { ...exist, qty: exist.qty + 1 };
          } else return x;
        })
      );
    } else {
      setBadge(badge + 1);
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setBadge(badge - 1);
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) => {
          if (x.id === product.id) {
            const newBadge = badge - 1;
            setBadge(newBadge);
            return { ...exist, qty: exist.qty - 1 };
          } else return x;
        })
      );
    }
  };

  ///
  // const [menuItem, setMenuItem] = useState(cakes);
  const [buttons, setButtons] = useState(allCategories);

  //Filter Function
  const filter = (button) => {
    if (button === "All") {
      setMenuItem(cakes);
      return;
    }

    const filteredData = cakes.filter((item) => item.category === button);
    setMenuItem(filteredData);
  };

  return (
    // <div>
    // </div>
    <Router>
      <Header badge={badge} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <Menu
              menuItem={menuItem}
              button={buttons}
              filter={filter}
              // products={products}
              onAdd={onAdd}
              onRemove={onRemove}
              cartItems={cartItems}
            />
          }
        ></Route>
        <Route
          path="/Cart"
          element={
            <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
          }
        ></Route>

        {/* <Route exact path="/Filter" element={<Filter />} /> */}
        <Route exact path="/contact" element={<Contact />} />
        {/* <Route exact path="/Cart" element={<Cart />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
