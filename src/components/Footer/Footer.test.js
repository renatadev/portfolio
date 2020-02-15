import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer";
import { render } from "@testing-library/react";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Footer />, div);
});

it("renders the footer", () => {
  const { getByText } = render(<Footer />);
  const footer = getByText(/made with/i);
  expect(footer).toBeInTheDocument();
});
