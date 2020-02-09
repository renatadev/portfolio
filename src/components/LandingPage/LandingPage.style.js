import styled from "styled-components";
import { ReactComponent as MainSvg } from "../../assets/landing-page.svg";
import { ReactComponent as Cv } from "../../assets/SocialMedia/cv.svg";
import { ReactComponent as Twitter } from "../../assets/SocialMedia/twitter.svg";
import { ReactComponent as Github } from "../../assets/SocialMedia/github.svg";
import { ReactComponent as Linkedin } from "../../assets/SocialMedia/linkedin.svg";

const HeaderContainer = styled.header`
  width: 90vw;
  height: 90vh;
  display: flex;
  // @media screen and (min-width: 320px) and (max-width: 640px) {
  //   flex-direction: column;
  // }
  h1 {
    font-size: 3rem;
  }
  section {
    margin: 30vh 0 0 10vh;
  }
`;

const Svg = styled(MainSvg)`
  @media screen and (min-width: 320px) and (max-width: 640px) {
    // width: 50vw;
    display: none;
  }
`;

const SocialCv = styled(Cv)`
  padding-left: 5%;
`;

const SocialTw = styled(Twitter)`
  padding-left: 5%;
`;

const SocialLi = styled(Linkedin)`
  padding-left: 5%;
`;

const SocialGb = styled(Github)`
  padding-left: 5%;
`;

export { HeaderContainer, Svg, SocialCv, SocialGb, SocialLi, SocialTw };
