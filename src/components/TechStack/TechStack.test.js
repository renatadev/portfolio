import React from "react";
import ReactDOM from "react-dom";
import TechStack from "./TechStack";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TechStack />, div);
});
