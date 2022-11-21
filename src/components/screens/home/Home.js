import React from "react";
import styled from "styled-components";
import background from "../../../images/background.jpg";
import FoodDrink from "./FoodDrink";
import Location from "./Location";

const Home = (setBurgerMenu, burgerMenu) => {
  return (
    <>
      <ImgDiv>
        <Img src={background} />
      </ImgDiv>
      <FoodDrink />
      <Location style={{ background: "white" }} />
    </>
  );
};

const ImgDiv = styled.div`
  width: 100%;
  max-width: 100vw;
  z-index: -1;
`;

const Img = styled.img`
  width: 100%;
  z-index: -1;
`;

export default Home;
