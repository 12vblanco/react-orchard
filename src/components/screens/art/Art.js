import React from "react";
import styled from "styled-components";
import prev1 from "../../../components/screens/art/prev1.jpg";
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
        Karen Laird{" "}
        <a
          href="https://www.instagram.com/karenlaird.art/"
          target="_blank"
          rel="noreferrer"
        >
          (link to Instagram)
        </a>
      </H2>
      <Image />
      <H2 style={{ maxWidth: "1000px", padding: "22px" }}>
        Karen Laird is a Scottish landscape artist. She grew up in Orkney, is
        currently living in Edinburgh, and spends her time painting between both
        places. <br />
        Karen studied glass at Edinburgh College of Art gaining her BA(hons) in
        design and applied arts, before studying painting at Leith School of
        Art, where she was awarded the painting course prize.
        <br />
        Her painting has been featured in numerous juried exhibitions, including
        the Jacksons Painting Prize, and the Lynn Painter-Stainers Prize at the
        Mall galleries in London.
        <br /> Beginning with a love of being outside in the landscape, these
        works were created in response to walks taken around Edinburgh in wooded
        areas during the Lockdown period. Karen makes paintings that portray
        what she enjoys about the natural world. Be it the patterns created by a
        tangle of branches, the glimpse of buildings peeping through between the
        gaps in the trees, or the sun dappling the leaves rustling in the wind.
        Working with acrylic, layering up the paint, her pictures are a
        collection of arks which capture nature in a joyful and colourful way.
        <br />
        <span style={{ color: "#ed4e4e" }}>Karen Laird </span>{" "}
      </H2>
      <H1 style={{ marginTop: "6rem" }}>Previous Exhibitions:</H1>
      <PrevDiv>
        <PrevImg src={prev1} />
        <div>
          <H2>
            <a
              href="https://victorblanco.co.uk"
              target="_blank"
              rel="noreferrer"
            >
              Victor Blanco
            </a>{" "}
          </H2>
          <H2>
            Handmade printing of tree rings; The rings, which are formed as the
            tree grows over time, provide a detailed and intricate pattern. The
            resulting prints are a beautiful and unique way to celebrate the
            natural world and the passage of time, and can make a wonderful
            addition to any home or office.
          </H2>
        </div>
      </PrevDiv>
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
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  padding: 22px;
  margin-bottom: 42px;
  @media (max-width: 700px) {
    padding: 1rem;
    flex-direction: column;
    margin: 6px;
  }
`;

const PrevDiv = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem 8rem;
  justify-content: center;
  align-items: center;
`;

const TextDiv = styled.div`
  max-width: 460px;
  margin-left: 22px;

  @media (max-width: 668px) {
    margin: 6px;
  }
`;
const Img = styled.img`
  width: 36rem;
  height: auto;
  border-radius: 6px;
`;
const PrevImg = styled.img`
  width: 14rem;
  height: auto;
  border-radius: 6px;
  margin-right: 6rem;
`;

const H1 = styled.h1`
  font-size: 28px;
`;
const H2 = styled.p`
  font-size: 19px;
  line-height: 1.5;
  text-align: justify;
  text-justify: inter-word;
`;

export default Art;
