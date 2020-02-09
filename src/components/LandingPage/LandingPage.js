import React from "react";
import * as Style from "./LandingPage.style";

const LandingPage = () => {
  return (
    <>
      <Style.HeaderContainer>
        <Style.Svg />
        {/* image here */}
        <h1>Renata Guerra</h1>
        <br />
        <p>SOFTWARE DEVELOPER</p>
        {/* social media buttons styled components here */}
      </Style.HeaderContainer>
    </>
  );
};

export default LandingPage;
