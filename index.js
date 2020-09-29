import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return <div>Hello, friend</div>;
};

const mountNode = document.getElementById("app");

ReactDOM.render(<App />, mountNode);
