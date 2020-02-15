import React, { useState } from "react";
import * as Style from "./Navbar.style";
import SlideMenu from "../SlideMenu/SlideMenu";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const toggleNav = () => {
    setNavbar(!navbar);
  };
  return (
    <>
      <Style.Head>
        <Style.Navbar>
          <h1>
            <a href="#home">RG</a>
          </h1>
          <span></span>
          <Style.ToggleButton onClick={toggleNav} />
        </Style.Navbar>
      </Style.Head>
      {navbar && <SlideMenu navbar={navbar} setNavbar={setNavbar} />}
    </>
  );
};

export default Navbar;
