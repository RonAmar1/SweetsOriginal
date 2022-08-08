import React from "react";
import "./Menu.css";
import "../Header/Header.css";
import "../../App.js";
import "../Cart/Cart";
import { useEffect } from "react";
import { useState } from "react";

// import Basket from "../Pages/Cart/Basket";

export function Menu({
  // menuItem,
  button,
  filter,
  products,
  onAdd,
  onRemove,
  cartItems,
}) {
  const [menuItem, setMenuItem] = useState([]);
  useEffect(() => {
    fetch("/api/Products")
      .then((res) => res.json())
      .then((Products) => setMenuItem(Products));
  }, []);

  return (
    <div className="p">
      {/* <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}></Basket> */}
      <div className="heads">
        <br />
        {button.map((cat, i) => {
          return (
            <button class="btn btn2" type="button" onClick={() => filter(cat)}>
              {cat}
            </button>
          );
        })}
      </div>
      <div class="productslist">
        {menuItem.map((item) => {
          return (
            <body>
              <div id="products">
                <div class="product">
                  <img src={item.img} alt="" />
                  <h1 class="title"> {item.title} </h1>
                  <h4 class="price"> {item.price} $</h4>
                  <button class="btn" onClick={() => onAdd(item)}>
                    Add To Cart
                  </button>
                </div>
              </div>
            </body>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
