import React from "react";
import styled from "styled-components";
import art from "../../../images/art/art.jpeg";
import Image from "./Image";

const Art = () => {
  return (
    <Div>
      <Header>
        <Img src={art} alt="general view" />
        <TextDiv>
          <H1>EXHIBITIONS AT THE ORCHARD</H1>
          <H2>
            In our side room we hold regular art exhibitions across the year
            supporting local artists and art students to showcase their work.
            <br />
            Since we are close to the Botanical Gardens in Edinburgh we
            encourage natural art, Edinburgh city-scapes, & photography. <br />{" "}
            <br />
            If you would like to hold an exhibition at The Orchard please email
            <br />
            Lorraine{" "}
            <span style={{ color: "#ed4e4e" }}>
              <a
                href="mailto:theorchardbarAhTgmailDhOTcom"
                onclick="this.href=this.href
              .replace(/AhT/,'&#64;')
              .replace(/DhOT/,'&#46;')"
              >
                here
              </a>
            </span>{" "}
            with your details.
          </H2>
        </TextDiv>
      </Header>
      <H1>Current Exhibition:</H1>{" "}
      <H2 style={{ fontSize: "18px" }}>
        Darren Ashcroft{" "}
        <a
          href="https://www.ashcroftfineart.com/"
          target="_blank"
          rel="noreferrer"
        >
          (link to website)
        </a>
      </H2>
      <Image />
      <H2 style={{ maxWidth: "1000px", padding: "22px" }}>
        I paint from my home on the Wirral which when you consider the subject
        of the vast majority of my work seems a bit confusing. However, I love
        Edinburgh and being a regular visitor to the city, I get the opportunity
        to complete studies and preliminary sketches in situ which I turn into
        finished works at home. When these run out, I resort to using quality
        shots from the many talented photographers operating in the city. <br />
        I was initially drawn to the architectural style of the Old Town;
        producing illustrative pictures, in gouache, of the notable buildings in
        the area. Recently I’ve ventured out and, taking inspiration from the
        Georgian architecture of the New Town, adopted a freer approach
        utilising collage, paint, pen, crayon and pencil.
        <br /> I’m thoroughly enjoying this new process and artistic
        experimentation is now becoming the ‘norm’. I hope you like what you see
        and please feel free to contact me if you require any additional
        information. <br />
        <span style={{ color: "#ed4e4e" }}>Darren </span>{" "}
      </H2>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  padding: 22px 0;
  background: rgba(0, 0, 0, 0.96);
  @media (max-width: 700px) {
    padding: 1rem;
  }
`;

const Header = styled.div`
  display: flex;
  max-width: 1200px;
  padding: 22px;
  margin-bottom: 42px;
  @media (max-width: 700px) {
    padding: 1rem;
    flex-direction: column;
    margin: 6px;
  }
`;
const TextDiv = styled.div`
  max-width: 340px;
  margin-left: 22px;
  text-align: justify;
  text-justify: inter-word;
  @media (max-width: 668px) {
    margin: 6px;
  }
`;
const Img = styled.img`
  width: 340px;
  height: 340px;
`;

const H1 = styled.h1`
  font-size: 28px;
`;
const H2 = styled.p`
  font-size: 15px;
  line-height: 1.5;
  text-align: justify;
  text-justify: inter-word;
`;

export default Art;
