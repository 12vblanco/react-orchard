import React from "react";
import styled from "styled-components";
import drinks1 from "../../../images/drinks1.jpg";
import food1 from "../../../images/food1.jpg";

const FoodDrink = () => {
  return (
    <DivColumn>
      <Div>
        <TextLeft>
          The Orchard Bar is a casual, relaxed restaurant and bar located in
          Canonmills just a few minutes' walk from the botanic gardens.
          <br /> We offer a regularly changing menu with seasonal produce,
          providing classic meals with a modern twist. Our pub favorites include
          Haddock & Chips and our famous Steak Pies and Burgers, as well as more
          refined dishes like Fillet of Cod and Lamb rump. We also have
          vegetarian and vegan options, as well as a gluten free and children's
          menu.
          <br />
          <br /> Please let us know if you need to see our gluten free menu or
          have any dietary requirements.
        </TextLeft>
        <Img src={food1} />
      </Div>
      <DivRight>
        <Img src={drinks1} />
        <TextRight>
          We offer a wide range of drinks at the Orchard, including beers,
          wines, gins, whiskies, rums, soft drinks, and hot drinks. We have Ales
          like Deuchars on tap, plus rotating guest ales.
          <br />
          We also have a selection of single cask whiskies from Cadenheads,
          independently bottled in Campbeltown. Try our Highland Park 30 year
          old cask strength whisky or our 8 year old Springbank Sherry cask.
          <br />
          Cadenheads also supplies our unique cask strength sipping rums. From
          the FourSquare distillery in Barbados, we have an 11 year old and a 12
          year old. We also have rums from Belize, Jamaica, and Trinidad, plus
          old favorites like Havana Club and Diplomatico. Come and enjoy the
          finest spirits at the Orchard.
        </TextRight>
      </DivRight>
    </DivColumn>
  );
};

const DivColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.96);
  height: auto;
  padding: 5rem 0;
  @media (max-width: 700px) {
    padding: 1rem;
  }
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  padding: 3rem 0;
  @media (max-width: 700px) {
    flex-direction: column;
    padding: 0 1rem;
  }
`;
const DivRight = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  padding: 3rem 0;
  @media (max-width: 700px) {
    flex-direction: column-reverse;
    padding: 0 1rem;
  }
`;

const TextLeft = styled.p`
  font-size: 19px;
  width: 42rem;
  line-height: 1.6;
  margin-right: 8rem;
  text-align: justify;
  text-justify: inter-word;
  @media (max-width: 700px) {
    width: 90%;
    margin-right: 0rem;
    margin-bottom: 3rem;
  }
  @media (max-width: 420px) {
    width: 100%;
  }

  &:first-letter {
    font-size: 2.2rem;
  }
`;
const TextRight = styled.p`
  font-size: 19px;
  width: 42rem;
  line-height: 1.6;
  margin-left: 8rem;
  text-align: justify;
  text-justify: inter-word;
  line-height: 1.6;
  @media (max-width: 700px) {
    width: 90%;
    margin-bottom: 3rem;
    margin-left: 0rem;
  }
  @media (max-width: 420px) {
    width: 100%;
  }

  &:first-letter {
    font-size: 2.2rem;
  }
`;

const Img = styled.img`
  width: 36rem;
  height: auto;
  border-radius: 8px;
  @media (max-width: 700px) {
    width: 60%;
    height: 60%;
    margin: 1rem;
  }
  @media (max-width: 420px) {
    width: 100%;
  }
`;

export default FoodDrink;
