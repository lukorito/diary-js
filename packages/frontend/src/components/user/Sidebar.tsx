import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { svgUrl } from "../../assets";

const Container = styled.div`
  height: 100%;
  border: 1px solid #eee;
  width: 25%;
  display: flex;
  flex-direction: column;
  background-color: #000;
  color: #fff;
  align-items: center;
`;

const SvgHolder = styled.img`
    height: 2em;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid rgba(255,255,255,.2);
`;

const Header = styled.span`
  padding: 30px 20px;
  font-size: 30px;
`;

const SideBar = () => {
  return (
    <Container>
      <LogoContainer>
        <Link to="/user" style={{textDecoration: 'none'}}>
          <SvgHolder src={svgUrl('logo.svg')}/>
          <Header>Diary</Header>
        </Link>
      </LogoContainer>
      <h1>Sidebar</h1>
      <Link to="/user/entries">Entries</Link>
    </Container>
  )
};

export default SideBar;

