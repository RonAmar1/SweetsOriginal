import React, { Component } from "react";
import "./Home.css";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="home">
          <img src="./images/cake13.jpg" alt="" />
          <img src="./images/cake2.jpg" alt="" />
          <img src="./images/dessert11.jpg" alt="" />
          <h1>WELCOME! Go and Step into our World</h1>
          <h4> Check Our Instagram!</h4>
        </div>
        <div className="insta">
          <a
            class="innerbox"
            href="https://instagram.com/lilachamar?igshid=YmMyMTA2M2Y="
          ></a>
        </div>
      </div>
    );
  }
}
