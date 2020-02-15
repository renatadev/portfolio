import React from "react";
import ReactDOM from "react-dom";
import About from "./About";
import { render } from "@testing-library/react";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<About />, div);
});

it("renders the section's title", () => {
  const { getByText } = render(<About />);
  const title = getByText(/hola, soy Renata/i);
  expect(title).toBeInTheDocument();
});
