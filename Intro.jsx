import React from "react";
import styled from "styled-components";
const Container = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  padding: 20px;
`;
const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Info = styled.div`
  width: 60%;
  display: flex;
  margin-top: 50px;
  align-items: center;
  justify-content: space-between;
`;
const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
`;
const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;
const Phone = styled.span`
  color: #f0667d;
`;
const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;
const Right = styled.div`
  width: 40%;
`;
const Title = styled.h1`
  font-size: 60px;
  width: 60%;
`;

const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
`;
const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Adventures in Creative Age</Title>
        <Desc>
          We believe that designing products and services in close partnership
          with our clients is the only way to have a real impact on their
          business.{" "}
        </Desc>
        <Info>
          <Button>Start a Project</Button>
          <Contact>
            <Phone> Call us (012) 345 - 6789</Phone>
            <ContactText>For any questions or concern</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>r</Right>
    </Container>
  );
};

export default Intro;
