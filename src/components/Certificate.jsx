import {  SearchOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 10px;
  min-width: 181px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f6fcf6;
  position: relative;
  border-radius: 15px;
  box-shadow: 0.9px 0.9px 0.9px rgba(0.7, 0.7, 0.7, 0.7);

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 50%;
  z-index: 2;
  border-radius: 39%;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Certificate = ({ item }) => {
  return (
    <Container onClick={() => window.location = item.link}>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <SearchOutlined/>
        </Icon>
      </Info>
    </Container>
  );
};

export default Certificate;