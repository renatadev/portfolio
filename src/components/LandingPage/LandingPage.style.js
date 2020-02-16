import styled from "styled-components";
import { ReactComponent as MainSvg } from "../../assets/landing-page.svg";
import { ReactComponent as Email } from "../../assets/SocialMedia/email.svg";
import { ReactComponent as Twitter } from "../../assets/SocialMedia/twitter.svg";
import { ReactComponent as Github } from "../../assets/SocialMedia/github.svg";
import { ReactComponent as Linkedin } from "../../assets/SocialMedia/linkedin.svg";

const HeaderContainer = styled.header`
  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  h1 {
    font-size: 5rem;
  }
  p {
    padding: 1% 0 5% 0;
  }
  section {
    padding: 10rem;
  }
  @media screen and (min-width: 320px) and (max-width: 800px) {
    flex-direction: column;
    padding-top: 4rem;
    section {
      padding: 0;
    }
  }
`;

const Svg = styled(MainSvg)`
  @media screen and (min-width: 320px) and (max-width: 798px) {
    display: none;
  }
`;

const SocialEmail = styled(Email)`
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

export { HeaderContainer, Svg, SocialEmail, SocialGb, SocialLi, SocialTw };
