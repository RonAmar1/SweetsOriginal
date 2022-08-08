import { useState } from "react";
import items from "./Products.json";
import "./Menu.css";
import Button from "./Botton";
import Menu from "./Menu";
import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <div>
        <FilterItems />
      </div>
    );
  }
}

const allCategories = ["All", ...new Set(items.map((item) => item.category))];
console.log(allCategories);

function FilterItems() {
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allCategories);

  //Filter Function
  const filter = (button) => {
    if (button === "All") {
      setMenuItem(items);
      return;
    }

    const filteredData = items.filter((item) => item.category === button);
    setMenuItem(filteredData);
  };

  return (
    <div className="productslist">
      <div className="product">
        <div className="heads">
          <h1>Our Products</h1>
          <Button button={buttons} filter={filter} />
        </div>

        <Menu menuItem={menuItem} />
      </div>
    </div>
  );
}
