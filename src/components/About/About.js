import React from "react";
import * as SC from "./About.style";

const About = () => {
  return (
    <>
      <SC.About id="About">
        <main>
          <h2>Hola, soy Renata!</h2>
          <p>
            I’m a super enthusiastic{" "}
            <SC.Bold>half Czech half Venezuelan developer</SC.Bold> that
            initially embarked on a university degree in{" "}
            <SC.Bold>Engineering</SC.Bold>, however, decided to follow my real
            passion for technology. I’m convinced tech is the right career path
            for me, as it allows me to express myself in many amazing ways, such
            as applying my <SC.Bold>creativity</SC.Bold>,{" "}
            <SC.Bold>eagerness to learn</SC.Bold> new things and{" "}
            <SC.Bold>love</SC.Bold> for both human and programming
            <SC.Bold> languages</SC.Bold>.
          </p>
          <p>
            As a young developer, I’ve got a thirst for{" "}
            <SC.Bold>creating, developing and delivering quality code</SC.Bold>,
            whilst I have a high capacity to pick up new skills quickly to
            ensure an exceptional impact within my team. Longer-term, I would
            like to contribute efficiently to a mission of good with the use of
            technology in a place where I feel supported{" "}
            <SC.Bold>
              to continue learning, to grow, to explore and to develop not only
              myself but those around me
            </SC.Bold>
            .
          </p>
          <p>
            Other than tech, I have a great interest in running, skiing and
            baking, always looking to improve but generally making sure to have
            fun!
          </p>
        </main>
        <img
          alt="Renata's avatar in about section"
          src={require("../../assets/About/about.png")}
        ></img>
      </SC.About>
    </>
  );
};

export default About;
