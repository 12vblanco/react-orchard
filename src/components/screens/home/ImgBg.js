import React, { useEffect, useState } from "react";
import styled from "styled-components";
import img0 from "../../../images/home/home0.jpg";
import img1 from "../../../images/home/home1.jpg";
import img3 from "../../../images/home/home3.jpg";
import img4 from "../../../images/home/home4.jpg";
import img5 from "../../../images/home/home5.jpg";
import img7 from "../../../images/home/home7.jpg";

export default function ImgBg() {
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    // generate a random number between 1 and 5 inclusive
    const randomPhoto = Math.floor(Math.random() * 5) + 1;
    setPhoto(randomPhoto);

    const interval = setInterval(() => {
      // increment the photo index, or set it back to 1 if it reaches the end
      const newPhoto = photo === 5 ? 1 : photo + 1;
      setPhoto(newPhoto);
    }, 32000); // interval duration in milliseconds

    return () => {
      clearInterval(interval);
    };
  }, [photo]);

  const returnPhotoURL = () => {
    switch (photo) {
      case 1:
        return img4;
      case 2:
        return img5;
      case 3:
        return img1;
      case 4:
        return img7;
      case 5:
        return img3;
      default:
        return img0;
    }
  };

  return (
    <div>
      <Img src={returnPhotoURL()} />
      <Div>
        <a
          href="/menu/children.pdf" // Ensure this path is correct
          target="_blank"
          rel="noopener noreferrer"
        >
          Find out about our Children and Dogs Policies
        </a>
      </Div>
    </div>
  );
}

const Img = styled.img`
  width: 100vw;
  min-width: 640px;
  height: auto;
  /* min-height: 400px; */
  max-height: 400px;
  object-fit: cover;

  @media (max-width: 640px) {
    min-height: 40vw;
    max-height: 40vw;
    min-width: auto;
    max-width: auto;
  }
`;

const Div = styled.div`
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  margin: 0px 3.2rem;
  text-transform: uppercase;
  cursor: pointer;
  padding: 0.6rem 0rem;
`;
