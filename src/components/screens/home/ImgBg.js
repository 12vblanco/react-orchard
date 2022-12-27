import React, { useEffect, useState } from "react";
import styled from "styled-components";
import img0 from "../../../images/home/home0.jpg";

import img1 from "../../../images/home/home1.jpg";
import img3 from "../../../images/home/home3.jpg";
import img4 from "../../../images/home/home4.jpg";
import img5 from "../../../images/home/home5.jpg";
import img7 from "../../../images/home/home7.jpg";

export default function ImgBg() {
  const [photo, setPhoto] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      change();
    }, 14000);

    return () => {
      clearInterval(interval);
    };
  }, [photo]);

  const change = () => {
    if (photo === 5) {
      setPhoto(1);
      return;
    }

    setPhoto((prev) => prev + 1);
  };

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
  console.log(photo, returnPhotoURL(), "this");

  return (
    <div>
      <Img src={returnPhotoURL()} style={{}} />
    </div>
  );
}

const Img = styled.img`
  width: 100vw;
  min-width: 640px;
  height: auto;
  min-height: 400px;
  max-height: 600px;

  @media (max-width: 640px) {
    min-height: 40vw;
    max-height: 40vw;
    min-width: auto;
    max-width: auto;
  }
`;
