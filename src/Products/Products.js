/// import { useState, useEffect } from "react";
import products from "./Products.json";
import "./Products.css";
import React, { Component } from "react";

export default class C extends Component {
  render() {
    return (
      <div>
        <Productlist />
      </div>
    );
  }
}

export function Productlist() {
  return (
    <section className="productslist">
      {products.map((product) => {
        return <Product key={product.id} product={product}></Product>;
      })}
    </section>
  );
}
export const Product = (props) => {
  const { img, title, price } = props.product;
  return (
    <article className="product">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{price}</h4>
    </article>
  );
};
