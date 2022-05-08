import "./styles.css";
import React from "react";
import Navbar from "../Navbar";
import Intro from "../Intro";
import styled from "styled-components";

export default function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
      </Container>
    </>
  );
}

// const Wrapper = styled.div`
//   padding: 2rem 3rem;
// `;
const Container = styled.div`
  height: 100vh;
`;
// const PrimaryBtn = styled.button`
//   outline: none;
//   border: none;
//   border-radius: 4px;
//   padding: 8px 30px;
//   background: dodgerblue;
//   color: white;
//   cursor: pointer;
// `;
// const SecBtn = styled.button`
//   outline: none;
//   border: none;
//   border-radius: 4px;
//   padding: 8px 30px;
//   background: hotpink;
//   color: white;
//   cursor: pointer;
// `;
