import React from "react";
import * as Style from "../SlideMenu/SlideMenu.style";
import * as SC from "./SlideMenu.style";

const SlideMenu = () => {
  return (
    <>
      <SC.HackBox>
        <Style.SlideNav>
          <ul>
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#About">ABOUT</a>
            </li>
            <li>
              <a href="#Projects">PROJECTS</a>
            </li>
            <li>
              <a href="#Tech">TECH-STACK</a>
            </li>
          </ul>
        </Style.SlideNav>
      </SC.HackBox>
    </>
  );
};

export default SlideMenu;
