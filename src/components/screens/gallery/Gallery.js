import React from "react";
import styled from "styled-components";
import Image from "./Image";

const Gallery = () => {
  return (
    <Div>
      {/* <Instagram /> */}
      <Image />
    </Div>
  );
};

const Div = styled.div`
  display: flex;
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

export default Gallery;
