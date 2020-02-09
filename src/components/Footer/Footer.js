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
      </footer>
    </Style.FooterWrapper>
  );
};

export default Footer;
