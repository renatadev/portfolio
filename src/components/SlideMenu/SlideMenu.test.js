import React from "react";
import { render } from "@testing-library/react";
import SlideMenu from "./SlideMenu";

it("renders Navbar", () => {
  const { getAllByText } = render(<SlideMenu />);
  const navbar = getAllByText(/Home/i);
  expect(navbar[0]).toBeInTheDocument();
});
