import React, { Component } from "react";
//import { Optionslist } from "./Option";
import { BrowserRouter as Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

const Cakess = (props) => {
  return (
    <article className="option">
      <img src="./images/cakes.jpg" alt="" />
      <h1>Cakes</h1>
    </article>
  );
};
const Cookiess = (props) => {
  return (
    <article className="option">
      <img src="./images/cookies.jpg" alt="" />
      <h1>Cookies</h1>
    </article>
  );
};
const Dessertss = (props) => {
  return (
    <article className="option">
      <img src="./images/desserts.jpg" alt="" />
      <h1>Desserts</h1>
    </article>
  );
};
// export function Optionslist() {
//   return (
//     <section className="optionslist">
//       {options.map((option) => {
//         return <Option key={option.id} option={option}></Option>;
//       })}
//     </section>
//   );
export default class Sweets extends Component {
  render() {
    return (
      <div className="optionslist">
        <Cakess />
        <Cookiess />
        <Dessertss />
      </div>
    );
  }
}
