import React from "react";
import ReactDOM from "react-dom";
import LandingPage from "./LandingPage";
import { render } from "@testing-library/react";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LandingPage />, div);
});

it("renders the landing page title", () => {
  const { getByText } = render(<LandingPage />);
  const title = getByText(/RENATA GUERRA/i);
  expect(title).toBeInTheDocument();
});
