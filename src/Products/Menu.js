import React from "react";
import "./Products.css";

export function Menu({ menuItem }) {
  return (
    <div className="productslist">
      {menuItem.map((item, onAdd) => {
        return (
          <div className="product">
            <img src={item.img} alt="" />
            <h1>{item.title}</h1>
            <h4>{item.price}</h4>
            <div>
              <button onClick={() => onAdd(item)}>Add To Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
