import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../images/logo_wht.png";
import BurgerMenu from "./BurgerMenu";
import NavMenu from "./NavMenu";
import Opening from "./Opening";

const Navbar = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const burgerHandler = () => {
    setBook(false);
    setOurMenu(false);
    setBurgerMenu(!burgerMenu);
  };
  const [ourMenu, setOurMenu] = useState(false);
  const ourHandler = () => {
    setBurgerMenu(false);
    setBook(false);
    setOurMenu(!ourMenu);
  };
  const [book, setBook] = useState(false);
  const bookHandler = () => {
    setBurgerMenu(false);
    setOurMenu(false);
    setBook(!book);
  };

  return (
    <>
      <Nav>
        <LogoDiv>
          <Link to="/">
            <Logo src={logo} />
          </Link>
          <BurgerIcon onClick={burgerHandler} />
        </LogoDiv>
        <OpeningDiv>
          <Opening />
        </OpeningDiv>
      </Nav>
      <NavMenu
        setBurgerMenu={setBurgerMenu}
        setBook={setBook}
        setOurMenu={setOurMenu}
        ourHandler={ourHandler}
        bookHandler={bookHandler}
        book={book}
        ourMenu={ourMenu}
      />
      {burgerMenu && (
        <BurgerMenu
          setBurgerMenu={setBurgerMenu}
          burgerMenu={burgerMenu}
          setBook={setBook}
          setOurMenu={setOurMenu}
        />
      )}
    </>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: 120px;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 10;
  @media (max-width: 824px) {
    flex-direction: column;
  }
`;

const LogoDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: fit-content;
  height: 100%;
  margin-left: 10rem;
  z-index: 1;
  width: 80rem;
  cursor: pointer;

  @media (max-width: 1018px) {
    width: 42rem;
    margin-left: 6%;
    justify-content: space-around;
  }
  @media (max-width: 824px) {
    margin-left: 0;
    margin-top: 6px;
  }
`;

const OpeningDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-right: 10rem;
  z-index: 1;
  @media (max-width: 824px) {
    margin-right: 0;
  }
`;

const Logo = styled.img`
  width: 26rem;
  z-index: 1;
`;

const BurgerIcon = styled(GiHamburgerMenu)`
  color: white;
  font-size: 4rem;
  margin-left: 4rem;
  margin-bottom: -1.5rem;
`;

export default Navbar;
