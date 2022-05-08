import styled from "styled-components";
import React from "react";
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>CG Blends</Logo>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>Features</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Pricing</MenuItem>
            <MenuItem>Contact</MenuItem>
          </Menu>
        </Left>
        <PrimaryBtn>Join Today!</PrimaryBtn>
      </Wrapper>
    </Container>
  );
};

const Menu = styled.ul`
  display: flex;
  list-style: none;
`;
const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
`;
const Container = styled.div`
  height: 80px;
`;
const Logo = styled.h1`
  font-weight: bold;
  font-family: "Poppins";
  color: crimson;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const PrimaryBtn = styled.button`
  outline: none;
  border: none;
  border: 2px solid white;
  border-radius: 10px;
  padding: 10px 15px;
  background: dodgerblue;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`;

export default Navbar;
