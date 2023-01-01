import React, { useState } from 'react'
import styled from 'styled-components'
import ClearIcon from '@mui/icons-material/Clear';
import Fade from 'react-reveal/Fade';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const handleClick =()=>{
    setBurgerStatus(true);
    
  }

  return (
    <>
    <Container>
      <a href="">
        <svg className="tds-icon tds-icon-logo-wordmark tds-site-logo-icon" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg"><path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" fill="currentColor"></path></svg>
      </a>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panels</a>
      </Menu>
      <RightMenu>
        <a href="#" id='shop'>Shop</a>
        <a href="#" id='account'>Account</a>
        <a href="#" id='menu' onClick={handleClick}>Menu</a>
      </RightMenu>
    
      <BurgerNav show={burgerStatus} >
        <CloseWrap>
          <CustomClose onClick={()=>setBurgerStatus(false)}/>
        </CloseWrap>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade in</a></li>
        <li><a href="#">Demo Drive</a></li>
        <li><a href="#">Insurance</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Roadster</a></li>
        <li><a href="#">Semi</a></li>
        <li><a href="#">Charging</a></li>
        <li><a href="#">Powerwall</a></li>
        <li><a href="#">Commercial Energy</a></li>
        <li><a href="#">Utilities</a></li>
        <li><a href="#">Find us</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Investor Relations</a></li>
      </BurgerNav>
    </Container>
    </>
  )
}

export default Header



const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    
    svg {
      height: 0.8rem;
    }
    a {
      padding: 8px 12px;
    }
    

    
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;
    gap: 0.7rem;
    margin-left: 7.2rem;

    a{
    text-decoration: none;
    font-weight: 600;
    }
    a:hover {
      background-color: rgba(0,0,0,0.07);
      border-radius: 5px;
    }

    @media(max-width:768px){
      display: none;
    }
`

const RightMenu = styled.div` 
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
     
    a{
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95rem;
    }
    a:hover {
      background-color: rgba(0,0,0,0.07);
      border-radius: 5px;
    }

    @media(max-width:768px){
      #shop, #account {
        display: none;
      }
      #menu {
        position: absolute;
        margin-right: 0.8rem;
        right: 0;
        background-color: rgba(0, 0, 0, 0.06);
        border-radius: 5px;
        padding: 7px 18px;
      }

    }
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 10;
  list-style: none;
  padding: 35px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: start;
  gap: 1.2rem;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};

  a{
    text-decoration: none;
    font-weight: 600;
  }
  @media(max-width:768px){
      position: fixed;
      top: 0;
      bottom: 0;
      height: 100vh;

    }
`

const CloseWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 2rem;
`

const CustomClose = styled(ClearIcon)`
  transform: scale(2);
  cursor: pointer;
`