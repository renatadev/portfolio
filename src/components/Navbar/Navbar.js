import React from "react";
import * as Style from "./Navbar.style";

const Navbar = () => {
  return (
    <>
      <Style.Head>
        <Style.Navbar>
          <h1>
            <a href="/">RG</a>
          </h1>
          <span></span>
          <div>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#About">About</a>
              </li>
              <li>
                <a href="#Projects">Projects</a>
              </li>
              <li>
                <a href="#Tech">Tech Stack</a>
              </li>
            </ul>
          </div>
        </Style.Navbar>
      </Style.Head>
    </>
  );
};

export default Navbar;
