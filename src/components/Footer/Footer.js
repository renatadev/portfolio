import React from "react";
import * as Style from "./Footer.style";

const Footer = () => {
  return (
    <Style.FooterWrapper>
      <footer>
        Made with
        <span role="img" aria-label="Purple heart emoji">
          💜
        </span>
        by Renata
        <br></br>
        <a href="mailto:contact@renata.dev">contact@renata.dev</a>
      </footer>
    </Style.FooterWrapper>
  );
};

export default Footer;
