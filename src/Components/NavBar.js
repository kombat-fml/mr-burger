import styled from 'styled-components';
import logoImg from '../images/logo.svg';
import loginImg from '../images/sign.svg';

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background-color: #299B01;
  color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 24px;
`;

const ImgLogo = styled.img`
  margin-right: 15px;
  width: 50px;
`;

const ImgLogin = styled.img`
  display: block;
  margin: 0 auto 3px;
`;

const SpanLogin = styled.span`
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
`;

export const NavBar = () => {
  return (
    <NavBarStyled>
      <Logo>
        <ImgLogo src={logoImg} alt="logo" />
        <H1>MrDonald's</H1>
      </Logo>
      <div>
        <ImgLogin src={loginImg} alt="icon: login"/>
        <SpanLogin>войти</SpanLogin>
      </div>
    </NavBarStyled>
  )
};
