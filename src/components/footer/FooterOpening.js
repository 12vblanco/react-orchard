import React from "react";
import styled from "styled-components";
import { opening } from "./OpeningTimes";

const FooterOpening = () => {
  return (
    <Div>
      {opening.map((open, i) => {
        return (
          <Ul key={i}>
            <Li>{open.opening}</Li>
          </Ul>
        );
      })}
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  align-items: center;
  font-size: 16px;
  padding-top: 2rem;
  @media (max-width: 920px) {
    font-size: 15px;
  }
  @media (max-width: 700px) {
    margin-bottom: 2rem;
  }
`;

const Ul = styled.ul`
  list-style: none;
  text-align: center;
`;

const Li = styled.li`
  margin: 0.25rem;
`;

export default FooterOpening;
