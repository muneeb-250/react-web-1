import styled from "styled-components";
import React from "react";
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>CG Blends</Logo>
        <PrimaryBtn>Join Today!</PrimaryBtn>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 50px;
`;
const Logo = styled.h1`
  font-weight: bold;
  font-family: "Poppins";
  color: crimson;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`

`
const PrimaryBtn = styled.button`
  outline: none;
  border: 2px solid dodgerblue;
  border-radius: 4px;
  padding: 8px 30px;
  background: white;
  color: #000;
  cursor: pointer;
`;

export default Navbar;
