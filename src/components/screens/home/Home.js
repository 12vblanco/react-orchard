import React from "react";
import FoodDrink from "./FoodDrink";
import ImgBg from "./ImgBg";
import Location from "./Location";

const Home = (setBurgerMenu, burgerMenu) => {
  return (
    <>
      {/* <ImgDiv> */}
      {/* <Img src={background} /> */}
      <ImgBg />
      {/* </ImgDiv> */}
      <FoodDrink />
      <Location />
    </>
  );
};

// const ImgDiv = styled.div`
//   width: 100%;
//   max-width: 100vw;
//   z-index: -1;
// `;

// const Img = styled.img`
//   width: 100%;
//   z-index: -1;
// `;

export default Home;
