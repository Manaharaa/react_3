import React from "react";
import ReactDOM from "react-dom";

const name = "Angela";
const surName = "Yu";
var num = 7;
ReactDOM.render(
  <div>
    <h1>Hello {name + " " + surName}</h1>
    <p>
      Your lucky number is {num} also {3 + 4}
    </p>
    <p>This is a random number {Math.floor(Math.random() * 10)}</p>
  </div>,
  //you can only right JS statements in this manner. you cant right expressions such as if conditions
  document.getElementById("root")
);
