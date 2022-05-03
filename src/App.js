import "./styles.css";
import React from "react";
import Navbar from "../Navbar";
import styled from "styled-components";

export default function App() {
  return (
    <>
      <Container>
        <Navbar />
      </Container>
      <Wrapper>
        <h1>Hello to my website </h1>
        <PrimaryBtn>Hello</PrimaryBtn>
        <SecBtn>Zello</SecBtn>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  padding: 2rem 3rem;
`;
const Container = styled.div`
  height: 100vh;
`;
const PrimaryBtn = styled.button`
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 8px 30px;
  background: dodgerblue;
  color: white;
  cursor: pointer;
`;
const SecBtn = styled.button`
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 8px 30px;
  background: hotpink;
  color: white;
  cursor: pointer;
`;
