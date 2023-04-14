import React from "react";
import styled from "styled-components";
import { images } from "./Images";

const Image = () => {
  return (
    <Div>
      {images.map((image, i) => {
        return (
          <div key={i}>
            <Img src={image.src} />
          </div>
        );
      })}
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: auto;
  max-width: 1200px;
`;

const Img = styled.img`
  width: 30vw;
  height: 30vw;
  margin: 10px;
  max-width: 340px;
  max-height: 340px;
  border-radius: 8px;
  object-fit: contain;
  @media (max-width: 668px) {
    width: 90vw;
    height: 90vw;
  }
`;

export default Image;
