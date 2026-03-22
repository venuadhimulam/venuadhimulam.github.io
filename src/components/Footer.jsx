import {
  Copyright,
  Facebook,
  Instagram,
  Mail,
  Pinterest,
  LinkedIn,
  GitHub,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile, mobileLandScape } from "../responsive";
import Hackerrank from "../images/Hackerrank_Logo.png";
import TwitterLogo from "../images/svg/twitter.svg";
import LeetCode from "../images/LeetCode_Logo.jpg";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Container = styled.div`
  padding: 0px 100px;
  display: flex;
  flex-direction: column;
  color: white;
  background-color: #263238;
  ${mobile({ padding: 0, flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  letter-spacing: 2px;
  ${mobile({ alignItems: "center" })};
`;

const Logo = styled.h1`
  flex: 1;
`;

const LogoDiv = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 6px;

  ${mobile({ margin: "10px", width: "30px", height: "30px" })};
`;

const AnimatedSocialIcon = styled(SocialIcon)`
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #191919;
  ${mobile({ display: "none" })};
`;

const Title = styled.h3`
  margin: 10px 0px;
`;

const Right = styled.div`
  flex: 0.2;
  padding: 20px;
  display:flex;
  flex-direction: column;
  align-content: flex-end;
  ${mobile({ alignItems: "center", justifyContent: "center" })};
  ${mobileLandScape({ alignItems: "center", justifyContent: "center" })};
`;

const ContactItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: row;
  ${mobile({flexDirection: "column" })};
  ${mobileLandScape({flexDirection: "column" })};
`;

const CopyRightDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 100%;
  z-index: 2;
  border-radius: 50%;
`;

const EmailTag = styled.a`
font-size: 1em;
cursor: pointer;
font-weight: 400;
position: relative;
color: #fff;
text-decoration: none;

&:after {
  content: '';
  display: block;
  background-color: #add6b2; 
  height: 3px;
  width: 0;
  position: absolute;
  bottom: -5px;
  transition: all 0.4s ease;
}

&:hover {
  transform: scale(1.1);
}

&:hover:after {
  width: 100%;
}
`;

const GetSocialContainer = () => {
  
  return (
    <SocialContainer>
      <AnimatedSocialIcon color="0a66c2" href="https://www.linkedin.com/in/adimulamvenugopal/">
        <LinkedIn />
      </AnimatedSocialIcon>
      <AnimatedSocialIcon color="010409" href="https://github.com/VenuAdhimulam">
        <GitHub />
      </AnimatedSocialIcon>   
      <AnimatedSocialIcon color="263238" href="https://www.hackerrank.com/profile/VenuAdimulam">
        <Image src={Hackerrank} /> 
      </AnimatedSocialIcon>
      <AnimatedSocialIcon color="263238" href="https://leetcode.com/VenuAdimulam/">
        <Image src={LeetCode} /> 
      </AnimatedSocialIcon>
      <AnimatedSocialIcon color="0f0f0f" href="https://twitter.com/VenuAdimulam">
        <Image src={TwitterLogo} /> 
      </AnimatedSocialIcon>
    </SocialContainer>
  );
};

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Container>
        <Contents>
          {!isMobile ?
            <Left>
              <LogoDiv>
                <Logo>Venu Adimulam</Logo>
              </LogoDiv>
              { GetSocialContainer()}
            </Left>
          : null }
          <Right>
            <Title>Contact</Title>
            {/* Phone contact (currently hidden) - use this block if you want to show the phone number */}
            {/* <ContactItem>
              <Phone style={{ marginRight: "20px" }} /> +1 216 467 0834
            </ContactItem> */}
            {/* Email contact - clickable mailto link */}
            <ContactItem>
              <Mail style={{ marginRight: "20px" }} /> <EmailTag href='mailto:venuadimulam01@gmail.com?body=Hello Venu Adimulam,'>venuadimulam01@gmail.com</EmailTag>
            </ContactItem>
            {isMobile ? GetSocialContainer(): null}
          </Right>
        </Contents>
        <hr/>
        <CopyRightDiv>
          <Desc>© Venu Adimulam 2023. All rights reserved.</Desc>  
        </CopyRightDiv>
      </Container>
     
    </>
  );
};

export default Footer;
