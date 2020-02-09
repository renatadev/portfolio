import styled from "styled-components";
import { ReactComponent as MainSvg } from "../../assets/landing-page.svg";
import { ReactComponent as Cv } from "../../assets/SocialMedia/cv.svg";
import { ReactComponent as Twitter } from "../../assets/SocialMedia/twitter.svg";
import { ReactComponent as Github } from "../../assets/SocialMedia/github.svg";
import { ReactComponent as Linkedin } from "../../assets/SocialMedia/linkedin.svg";

const HeaderContainer = styled.header`
  width: 100vw;
  height: 100vh;
  display: flex;
  text-align: center;
  align-items: center;
  h1 {
    font-size: 5rem;
  }
  p {
    padding: 1% 0 5% 0;
  }
  section {
    margin-left: 25vh;
  }
  @media screen and (min-width: 320px) and (max-width: 640px) {
    margin-left: 0px;
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
  // padding-left: 5%;
`;

export { HeaderContainer, Svg, SocialCv, SocialGb, SocialLi, SocialTw };
