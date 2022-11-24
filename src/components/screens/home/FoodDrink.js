import React from "react";
import styled from "styled-components";
import drinks1 from "../../../images/drinks1.jpg";
import food1 from "../../../images/food1.jpg";

const FoodDrink = () => {
  return (
    <DivColumn>
      <Div>
        <TextLeft>
          The Orchard Bar is an informal, relaxed bar and restaurant situated in
          Canonmills only a few minutes walk from the Botanic Gardens. With a
          regularly changing and varied menu using locally sourced seasonal
          produce the orchard provides excellent classic meals with a modern
          touch. Whether it is one of our pub favourites such as Haddock & Chips
          or our legendary Steak Pies and Burgers to the more refined Fillet of
          Cod or Lamb rump dishes there is something for every palate. The
          Orchard also has vegetarian and vegan options as well as a gluten free
          and children`s menu available. Please ask us if you need to see our
          gluten free menu or have any dietary requirements.
        </TextLeft>
        <Img src={food1} />
      </Div>
      <DivRight>
        <Img src={drinks1} />
        <TextRight>
          We have a wide range of drinks here at the Orchard. Beers, Wines,
          Gins, Whiskies, Rums, soft drinks and hot drinks. We have Ales like
          Deuchars on the pumps plus guest ales that change regularly. We also
          have a selection of single cask whiskies supplied by Cadenheads which
          are independently bottled in Campbeltown, for that extra special
          treat. Why not try our Highland Park 30 year old cask strength whisky
          for example or our 8 year old Springbank Sherry cask. Cadenheads also
          supply us with our unique cask strength sipping rums. From the
          FourSquare distillery in Barbados we have an 11 year old and a 12 year
          old to try, and rums from Belize, Jamaica and Trinidad. Plus old
          favourites like Havana club from Cuba to Diplomatico from Venezuela.
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
    padding: 0 3rem;
  }
`;
const DivRight = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  padding: 3rem 0;
  @media (max-width: 700px) {
    flex-direction: column-reverse;
    padding: 0 3rem;
  }
`;

const TextLeft = styled.p`
  font-size: 15px;
  width: 42rem;
  line-height: 1.6;
  margin-right: 8rem;
  text-align: justify;
  text-justify: inter-word;
  @media (max-width: 700px) {
    width: 80%;
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
  font-size: 15px;
  width: 42rem;
  line-height: 1.6;
  margin-left: 8rem;
  text-align: justify;
  text-justify: inter-word;
  line-height: 1.6;
  @media (max-width: 700px) {
    width: 80%;
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
  width: 30rem;
  height: 30rem;
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
