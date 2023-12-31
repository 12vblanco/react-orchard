import React from "react";
import styled from "styled-components";
import prev1 from "../../../components/screens/art/prev1.jpg";
import prev2 from "../../../images/art/current2.jpeg";
import prev3 from "../../../images/art/new3.jpg";
import art from "../../../images/art/new9.jpg";
import { default as prev4 } from "../../../images/art/unn2.png";
import prev5 from "../../../images/art/unn3.png";
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
      <H2 style={{ maxWidth: "1000px", padding: "22px" }}>
        Dovilė Petkevičiūtė
        <br />
        <br /> Dovilė Petkevičiūtė is a Lithuanian born artist, who has been
        residing in Edinburgh, Scotland for last decade. Her painting journey
        started 2 years ago, after tragedy struck her life and art became a way
        of healing. Ethereal landscapes inspired by small moments in nature are
        her forte. She patiently observes nature unfolding and then translates
        her feelings onto canvas, leaving viewers feeling a sense of
        tranquillity. Instagram handle @unumsolumart <br />
        <br />
        <br />
        <a
          href="https://www.instagram.com/unumsolumart"
          target="_blank"
          rel="noreferrer"
        >
          Instagram: @unumsolumart
        </a>{" "}
        <br />
        <br />
        <span style={{ color: "#ed4e4e" }}>Dovilė Petkevičiūtė</span>
      </H2>{" "}
      <Image />
      {/* Previous Ex */}
      <H1 style={{ marginTop: "12rem" }}>Previous Exhibitions:</H1>
      {/* Exhibition */}
      <PrevDiv>
        <PrevImg src={prev5} />
        <div>
          <H2>
            <a href="https://www.facebook.com/pamelamcmahonart">
              Pamela McMahon
            </a>{" "}
          </H2>
          <H2>
            Pamela McMahon, an Edinburgh based artist who specialises in mixed
            media, semi abstract collage landscapes. Her works are exuberant and
            full of texture and movement and often feature golden accents. Her
            use of pattern and collage invite close inspection to fully
            appreciate the detail and textures involved.
          </H2>
        </div>
      </PrevDiv>
      <PrevDiv>
        <PrevImg src={prev4} />
        <div>
          <H2>
            <a
              href="https://www.instagram.com/manuela.vengoechea.art/"
              target="_blank"
              rel="noreferrer"
            >
              Emily Jane Long.{" "}
            </a>{" "}
          </H2>
          <H2>
            Emily Jane Long is a South African painter born in Cape Town in
            1991. Currently based in Edinburgh, her most recent collection of
            artworks features mainly contemporary botanical studies and floral
            still lifes.
          </H2>
        </div>
      </PrevDiv>
      <PrevDiv>
        <PrevImg src={prev3} />
        <div>
          <H2>
            <a
              href="https://www.instagram.com/manuela.vengoechea.art/"
              target="_blank"
              rel="noreferrer"
            >
              Manuela Vengoechea{" "}
            </a>{" "}
          </H2>
          <H2>
            Whilst heading into my last year at the Glasgow School of Art, this
            series of Edinburgh lithographs reflects my longing to return to the
            beautiful city I grew up in, especially the areas local to The
            Orchard.
          </H2>
        </div>
      </PrevDiv>
      <PrevDiv>
        <PrevImg src={prev2} />
        <div>
          <H2>
            <a
              href="https://www.instagram.com/karenlaird.art/"
              target="_blank"
              rel="noreferrer"
            >
              Karen Laird
            </a>{" "}
          </H2>
          <H2>
            Karen Laird is a Scottish landscape artist. She grew up in Orkney,
            is currently living in Edinburgh, and spends her time painting
            between both places. Karen studied glass at Edinburgh College of Art
            gaining her BA(hons) in design and applied arts, before studying
            painting at Leith School of Art, where she was awarded the painting
            course prize
          </H2>
        </div>
      </PrevDiv>
      {/* Exhibition */}
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

  @media (max-width: 640px) {
    flex-direction: column;
  }
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
  @media (max-width: 640px) {
    width: 100vw;
    margin-right: 0;
    padding: 2rem;
  }
`;
const PrevImg = styled.img`
  width: 14rem;
  height: auto;
  border-radius: 6px;
  margin-right: 6rem;

  @media (max-width: 640px) {
    width: 100vw;
    margin-right: 0;
    padding: 2rem;
  }
`;

const H1 = styled.h1`
  font-size: 28px;

  @media (max-width: 640px) {
    width: 100vw;
    margin-right: 0;
    padding: 2rem;
  }
`;
const H2 = styled.p`
  font-size: 19px;
  line-height: 1.5;
  text-align: justify;
  text-justify: inter-word;

  @media (max-width: 640px) {
    width: 100vw;
    margin-right: 0;
    padding: 2rem;
  }
`;

export default Art;
