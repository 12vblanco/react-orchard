import React, { useEffect, useState } from "react";
import styled from "styled-components";
import img1 from "../../../images/background.jpg";
// import img3 from "../../../images/drinks1.jpg";
// import img2 from "../../../images/food1.jpg";
// import img4 from "../../../images/front.jpg";

export default function ImgBg() {
  const [photo, setPhoto] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      change();
    }, 15000);

    return () => {
      clearInterval(interval);
    };
  }, [photo]);

  const change = () => {
    if (photo === 6) {
      setPhoto(1);
      return;
    }

    setPhoto((prev) => prev + 1);
  };

  const returnPhotoURL = () => {
    switch (photo) {
      case 1:
        return img1;
      case 2:
        return img1;
      case 3:
        return img1;
      case 4:
        return img1;
      default:
        return img1;
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
  width: 100%;
  min-width: 1000px;
  height: auto;
  min-height: 400px;
  max-height: 600px;
`;
