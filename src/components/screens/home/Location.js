import React from "react";
import { FiMap, FiMapPin, FiPhoneCall } from "react-icons/fi";
import styled from "styled-components";
import front from "../../../images/front.jpg";
import list from "../../../images/list-logo.png";

const Location = () => {
  return (
    <>
      {" "}
      <DivColumn>
        <H2>How to find us?</H2>
        <Div>
          <Text>
            <Row>
              1-2 Howard Place Canonmills <FiMapPin />
            </Row>
            <Row>Edinburgh, EH3 5JZ</Row>
            <Row>
              (Click to find us on the map) <FiMap />
            </Row>
            <Row>
              Phone:{" "}
              <a href="tel:0131 550 0850" style={{ color: "#ed4e4e" }}>
                0131 550 0850
              </a>{" "}
              <FiPhoneCall style={{ color: "#ed4e4e" }} />
            </Row>
            <Row style={{ color: "white" }}>
              Email:{" "}
              <a href="mailto:theorchardbar@gmail.com">
                theorchardbar@gmail.com
              </a>
            </Row>
          </Text>
          <Img src={front} />
        </Div>
      </DivColumn>
      <DivList>
        <ListImg src={list} />
        <ListText>
          "They take a lot of care to cater for all tastes; Tennents
          traditionalists aren't forgotten but cask enthusiasts and higher-end
          beer fans will also find something to tempt them. The wine, gin and
          whisky lists are generous, as are the portions. There was a time when
          pub, purée and jus were not words you'd expect to find in the same
          sentence, but the kitchen team enjoy unleashing their finer skills on
          daily and seasonal specials."
        </ListText>
      </DivList>
    </>
  );
};

const DivColumn = styled.div`
  display: flex;
  background: rgba(0, 0, 0, 0.9);
  border-top: 1px solid #8e7427;
  flex-direction: column;
  align-items: center;
  height: auto;
  padding: 5rem 0;
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  padding: 4rem 0;
  @media (max-width: 700px) {
    flex-direction: column;
    padding: 0px;
  }
`;
const DivList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.98);
  width: 100%;
  padding: 5rem 0;
  border-top: 1px solid #8e7427;
  @media (max-width: 700px) {
    padding: 2rem;
  }
  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

const Row = styled.div`
  margin: 1rem 0;
`;

const Text = styled.div`
  font-size: 19px;
  font-weight: 600;
  width: 42rem;

  @media (max-width: 700px) {
    font-size: 19px;
    font-weight: 500;
    padding: 12px;
    text-align: center;
  }
  @media (max-width: 420px) {
    margin: 1rem 0;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 36rem;
  height: 30rem;
  border-radius: 8px;
  margin: 0 0 0 4rem;
  @media (max-width: 700px) {
    width: 100%;
    max-width: 340px;
    height: auto;
    margin-left: 0;
    margin-top: 3rem;
  }
`;
const ListText = styled.p`
  font-style: italic;
  font-size: 17px;
  font-weight: 400;
  width: 54rem;
  margin-left: 12px;
  text-align: justify;
  text-justify: inter-word;
  & a {
    color: #ed4e4e;
  }
  @media (max-width: 700px) {
    margin: 1rem;
  }
  @media (max-width: 420px) {
    width: 100%;
  }
`;

const ListImg = styled.img`
  width: 10rem;
  height: auto;
  margin-right: 18px;
  @media (max-width: 420px) {
    margin: 1rem 0;
  }
`;

const H2 = styled.h2`
  font-size: 36px;
  padding-top: 3rem;
  @media (max-width: 700px) {
    font-size: 28px;
    font-weight: 500;
  }
`;

export default Location;
