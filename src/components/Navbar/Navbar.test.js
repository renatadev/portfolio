import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import { render } from "@testing-library/react";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Navbar />, div);
});

it("renders RG logo", () => {
  const { getByText } = render(<Navbar />);
  const logo = getByText(/RG/i);
  expect(logo).toBeInTheDocument();
});
