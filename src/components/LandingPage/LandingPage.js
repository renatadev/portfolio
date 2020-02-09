import React from "react";
import * as Style from "./LandingPage.style";

const LandingPage = () => {
  return (
    <>
      <Style.HeaderContainer>
        <Style.Svg />
        <section>
          <h1>Renata Guerra</h1>
          <p>SOFTWARE DEVELOPER</p>
          <a
            href="https://twitter.com/renatadev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Style.SocialGb />
          </a>
          <a
            href="https://twitter.com/renatadev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Style.SocialTw />
          </a>
          <a
            href="https://twitter.com/renatadev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Style.SocialLi />
          </a>
          <a
            href="https://twitter.com/renatadev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Style.SocialCv />
          </a>
        </section>
        {/* social media buttons styled components here */}
      </Style.HeaderContainer>
    </>
  );
};

export default LandingPage;
