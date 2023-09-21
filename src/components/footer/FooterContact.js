import React from "react";
import { FaHeart } from "react-icons/fa";
import styled from "styled-components";
import logo from "../../images/logo_wht.png";

const FooterContact = () => {
  return (
    <Div>
      <DivRow>
        <Img src={logo} />
      </DivRow>
      <ContactText>1-2 Howard Place, Canonmills</ContactText>
      <ContactText>Edinburgh, EH3 5JZ</ContactText>
      <ContactTelf>
        <a href="tel:0131 550 0850">0131 550 0850</a>
      </ContactTelf>
      <ContactText>
        <a href="mailto:theorchardbar@gmail.com">theorchardbar@gmail.com</a>
      </ContactText>
      <CopyText>
        <a
          href="https://victorblancoweb.com/home#form"
          target="_blank"
          rel="noreferrer"
        >
          Website Victor Blanco{" "}
          <Heart>
            <FaHeart />
          </Heart>{" "}
          2019 - {new Date().getFullYear()} &copy;
          <span>&nbsp;&nbsp;</span>
        </a>
      </CopyText>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 24rem;
  align-items: center;
`;

const DivRow = styled.div`
  display: flex;
  font-size: 32px;
  padding: 2rem 1rem;
`;

const ContactText = styled.div`
  text-align: center;
  font-size: 17px;
`;
const ContactTelf = styled.div`
  text-align: center;
  font-size: 18px;
  color: #ed4e4e;
  margin: 4px;
`;
const CopyText = styled.div`
  text-align: center;
  font-size: 11px;
  margin-top: 6rem;
`;

const Img = styled.img`
  width: 20rem;
`;

const Heart = styled.span`
  position: relative;
  top: 3px;
  left: 1px;
  font-size: 12px;
  color: red;
`;

export default FooterContact;
