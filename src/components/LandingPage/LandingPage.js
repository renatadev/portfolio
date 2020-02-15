import React from "react";
import * as Style from "./LandingPage.style";

const LandingPage = () => {
  return (
    <>
      <Style.HeaderContainer id="home">
        <main>
          <Style.Svg />
        </main>
        <section>
          <h1>
            Renata <br /> Guerra
          </h1>
          <p>SOFTWARE DEVELOPER</p>
          <a
            href="https://github.com/renatadev"
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
            href="https://linkedin.com/in/renatadev"
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
      </Style.HeaderContainer>
    </>
  );
};

export default LandingPage;
