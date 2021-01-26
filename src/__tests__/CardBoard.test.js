import React from "react";
import ReactDOM from "react-dom";
import CupBoard from "../components/CardBoard";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CupBoard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
