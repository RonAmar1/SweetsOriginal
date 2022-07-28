import React from "react";
import "./Products.css";
import Nav from "react-bootstrap/Nav";

function Button({ button, filter }) {
  return (
    <div className="heads">
      {button.map((cat, i) => {
        return (
          <button class="btn btn2" type="button" onClick={() => filter(cat)}>
            {cat}
          </button>
        );
      })}
    </div>
  );
}

export default Button;
