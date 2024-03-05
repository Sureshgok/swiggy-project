import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("div", {}, [
//   React.createElement("h2", { id: "id1" }, "hello"),
//   React.createElement("h3", {}, "hello world"),
//   React.createElement("h4", {}, "hello world"),
// ]);
// const heading = <h1 id="id1">hello suresh</h1>;
//const heading = <p id="id1"> hello suresh goka</p>;
// const heading = <img src="car.jpeg" alt="img deleted" />;
// const heading = <a href="https://www.google.com/">click</a>;
// const heading = <img src="car.jpeg" alt="img deleted" />;
const heading = [
  <h1 id="id1">hello suresh</h1>,
  <p className="hi"> hello suresh goka</p>,
  <h2 id="id2">cvghjk</h2>,
];
console.log("hello");

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("id"));
root.render(heading);
