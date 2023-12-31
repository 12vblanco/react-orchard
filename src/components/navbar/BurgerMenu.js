import React from "react";
import ReactDOM from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Backdrop = ({ setBurgerMenu, burgerMenu }) => {
  return (
    <BackdropDiv
      onClick={() => {
        setBurgerMenu(!burgerMenu);
      }}
    />
  );
};

const BurgerOverlay = ({ setBurgerMenu, burgerMenu }) => {
  return (
    <Div>
      <CloseIcon
        stile={{ color: "white" }}
        onClick={() => {
          setBurgerMenu(!burgerMenu);
        }}
      />
      <Ul>
        <Link to="/">
          <Li
            onClick={() => {
              setBurgerMenu(!burgerMenu);
            }}
          >
            Home
          </Li>
        </Link>
        <Link to="/gallery">
          <Li
            onClick={() => {
              setBurgerMenu(!burgerMenu);
            }}
          >
            Gallery
          </Li>
        </Link>
        <Link to="/art">
          <Li
            onClick={() => {
              setBurgerMenu(!burgerMenu);
            }}
          >
            Art
          </Li>
        </Link>
        <Li
          onClick={() => {
            setBurgerMenu(!burgerMenu);
          }}
        >
          <a
            href="https://www.facebook.com/theorchardbar/"
            target="_blank"
            rel="noreferrer"
          >
            <FbIcon />
          </a>
        </Li>
        <Li
          onClick={() => {
            setBurgerMenu(!burgerMenu);
          }}
        >
          <a
            href="https://www.instagram.com/theorchardbar/"
            target="_blank"
            rel="noreferrer"
          >
            <InIcon />
          </a>
        </Li>
        <Li
          onClick={() => {
            setBurgerMenu(!burgerMenu);
          }}
        >
          <a
            href="https://twitter.com/theorchardbar?lang=en"
            target="_blank"
            rel="noreferrer"
          >
            <TwIcon />
          </a>
        </Li>
        <Li
          onClick={() => {
            setBurgerMenu(!burgerMenu);
          }}
        >
          <a
            href="https://www.tripadvisor.co.uk/Restaurant_Review-g186525-d2102775-Reviews-The_Orchard-Edinburgh_Scotland.html"
            target="_blank"
            rel="noreferrer"
          >
            <TrIcon />
          </a>
        </Li>
      </Ul>
    </Div>
  );
};

const portalElement = document.getElementById("burger");

const BurgerMenu = ({ setBurgerMenu, burgerMenu }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop setBurgerMenu={setBurgerMenu} burgerMenu={burgerMenu} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <BurgerOverlay setBurgerMenu={setBurgerMenu} burgerMenu={burgerMenu} />,
        portalElement
      )}
    </>
  );
};

const Div = styled.div`
  position: absolute;
  top: 150px;
  left: 0;
  text-align: right;
  width: 340px;
  height: auto;
  padding-top: 1rem;
  padding-bottom: 2rem;
  background: rgba(0, 0, 0, 0.94);
  border-radius: 0 0px 8px 0;
  z-index: 2;

  @media (max-width: 640px) {
    width: 100%;
    height: 100%;
  }
`;
const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
`;
const Li = styled.li`
  font-size: 20px;
  font-weight: 700;
  margin: 1.8rem 0;
`;

const CloseIcon = styled(AiOutlineClose)`
  color: white;
  font-size: 40px;
  margin-right: 12px;
  cursor: pointer;
`;

const FbIcon = styled(FiFacebook)`
  font-size: 28px;
`;
const InIcon = styled(FiInstagram)`
  font-size: 28px;
`;
const TwIcon = styled(FiTwitter)`
  font-size: 28px;
`;
const TrIcon = styled(FaTripadvisor)`
  font-size: 28px;
`;

const BackdropDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0);
`;

export default BurgerMenu;
