import React from "react";
import ReactDOM from "react-dom";

import Team from "./containers/Team";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Team />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
