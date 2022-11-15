import React from "react";
import { FaTripadvisor } from "react-icons/fa";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import styled from "styled-components";

const FooterSocial = () => {
  return (
    <Div>
      <DivRow>
        <a
          href="https://www.facebook.com/theorchardbar/"
          target="_blank"
          rel="noreferrer"
        >
          <FbIcon />
        </a>
        <a
          href="https://www.instagram.com/theorchardbar/"
          target="_blank"
          rel="noreferrer"
        >
          <InIcon />
        </a>
        <a
          href="https://twitter.com/theorchardbar?lang=en"
          target="_blank"
          rel="noreferrer"
        >
          <TwIcon />
        </a>
        <a
          href="https://www.tripadvisor.co.uk/Restaurant_Review-g186525-d2102775-Reviews-The_Orchard-Edinburgh_Scotland.html"
          target="_blank"
          rel="noreferrer"
        >
          <TrIcon />
        </a>
      </DivRow>
      <FollowDiv>Follow Us!</FollowDiv>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  align-items: center;
  @media (max-width: 700px) {
    margin-bottom: 3rem;
  }
`;

const DivRow = styled.div`
  display: flex;
  font-size: 32px;
  padding: 6rem 1rem 3rem 1rem;
  @media (max-width: 700px) {
    padding: 2rem;
  }
`;

const FollowDiv = styled.div`
  font-family: "Dancing Script", cursive;

  font-size: 42px;
  @media (max-width: 920px) {
    font-size: 36px;
  }
`;

const FbIcon = styled(FiFacebook)`
  margin: 0 1.8rem;
`;
const InIcon = styled(FiInstagram)`
  margin: 0 1.8rem;
`;
const TwIcon = styled(FiTwitter)`
  margin: 0 1.8rem;
`;
const TrIcon = styled(FaTripadvisor)`
  margin: 0 1.8rem;
`;

export default FooterSocial;
