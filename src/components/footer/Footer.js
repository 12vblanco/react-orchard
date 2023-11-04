import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import light from "../../images/light.jpg";
import FooterContact from "./FooterContact";
import FooterOpening from "./FooterOpening";
import FooterSocial from "./FooterSocial";

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${light})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <Div>
        <FooterSocial />
        <FooterOpening id="#opening" />
        <FooterContact />
      </Div>
      <Link to="/terms">
        <Terms>Terms & Conditions</Terms>
      </Link>{" "}
    </div>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-top: 1px solid #8e7427;
  min-height: 36rem;
  padding: 6rem 2rem 2rem 2rem;
  width: 100%;
  height: auto;
  background: rgba(0, 0, 0, 0.9);
  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }
`;

const Terms = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  margin-left: 4px;
  color: var(--gold);
`;

export default Footer;
