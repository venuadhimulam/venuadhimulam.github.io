import { React } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile, mobileLandScape } from "../responsive";
import mainLogo from "../images/main_Logo.svg";
import Resume from "../pdfs/VenuAdimulam.pdf";
import wave from "../images/svg/wave.svg";

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ height: "75vh" })}
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: relative;
  ${mobile({ height: "100%", flexDirection: "column" })}
  ${mobileLandScape({ height: "100vh" })}
`;

const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-Index: 1;

  ${mobile({
    display: "contents",
    padding: 0,
    flex: "0.5",
  })}
`;

const Image = styled.img`
  width: 80%;
  z-index: 99;
  ${mobile({ marginTop: "25px", width: "70%;" })}
`;

const WaveImg = styled.img`
  width: 100%;
  position: absolute;
  aspect-ratio: 900/200;
  width:100%;
  top: 0;
  left: 0;
  z-index: 1;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-Index: 1;

  ${mobile({
    padding: 0,
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "center",
  })}
`;

const Title = styled.h1`
  font-size: 80px;
  letter-spacing: 2px;
  ${mobile({ fontSize: "40px" })}
  ${mobileLandScape({ fontSize: "35px" })}
`;

const Greeting = styled.h6`
  margin: 10px 0px;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 3px;
  ${mobile({ fontSize: "1.5rem" })}
  ${mobileLandScape({ fontSize: "1.3rem" })}
`;

const Desc = styled.p`
  margin: 10px 0px;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 3px;
  ${mobile({ fontSize: "1.5rem" })}
  ${mobileLandScape({ fontSize: "1.3rem" })}
`;

const Button = styled.a`
  border: 4px solid #c1eec6;
  background-color: #c1eec6;
  cursor: pointer;
  font-weight: 500;
  font-size: 1em;
  text-decoration: none;
  color: #000;
  display: flex;
  width: 140px;
  height: 40px;
  border-radius: 10px;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  margin-top: 20px;

  &:hover {
    background-color: white;
    transition: all 1s ease;
  }
  ${mobile({ backgroundColor: "#c1eec6 !important" })}
`;

const SpanTag = styled.span`
  color: #c1eec6;
  ${mobile({ color: "#c1eec6" })}
`;

const Slider = () => {
  return (
    <>
      <Container id="home">
        <WaveImg src={wave} />  
        <Wrapper>
          {sliderItems.map((item) => (
            <Slide bg={item.bg} key={item.id}>
              <ImgContainer>
                <Image src={mainLogo} />
              </ImgContainer>
              <InfoContainer>
                <Greeting>{item.greeting}</Greeting>
                <Title>
                  Venu<SpanTag style={{ color: "#add6b2" }}> Adimulam</SpanTag>
                </Title>
                <Desc>{item.desc}</Desc>
                <Button href="https://drive.google.com/file/d/1f_2iSCZKT4yQZILUpc0BxVnam27-nLLi/view?usp=sharing" target="_blank">
                  View Resume
                </Button>
              </InfoContainer>
            </Slide>
          ))}
        </Wrapper>
      </Container>
    </>
  );
};

export default Slider;
