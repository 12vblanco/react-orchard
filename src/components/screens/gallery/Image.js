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
  width: 340px;
  height: 340px;
  margin: 18px;
  border-radius: 8px;
`;

export default Image;
