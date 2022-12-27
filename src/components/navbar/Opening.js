import React, { useEffect, useState } from "react";
import { FiClock, FiMapPin, FiPhoneCall } from "react-icons/fi";
import styled from "styled-components";

const Opening = () => {
  const [opened, setOpened] = useState("");

  function checkStoreStatus() {
    const d = new Date();
    const n = d.getDay();
    const now = d.getHours() + "." + d.getMinutes();
    const weekdays = [
      ["Sunday", 12.0, 23.0],
      ["Monday", 12.0, 23.0],
      ["Tuesday", 12.0, 23.0],
      ["Wednesday", 12.0, 23.0],
      ["Thursday", 12.0, 23.0],
      ["Friday", 12.0, 23.0],
      ["Saturday", 12.0, 23.0],
    ];
    const day = weekdays[n];
    if ((now > day[1] && now < day[2]) || (now > day[3] && now < day[4])) {
      setOpened("We are open now!");
    } else {
      setOpened("Sorry, we are closed");
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      checkStoreStatus();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ColumnDiv>
      <RowDiv>
        <Text>{opened}</Text>
        <OpeningHours
          onClick={() => {
            window.scrollTo(0, 3000);
          }}
        >
          <Text>Our opening hours</Text>
          <ClockIcon />
        </OpeningHours>
      </RowDiv>
      <FindDiv>
        <a
          href="https://www.google.com/maps/place/The+Orchard+Bar+%26+Restaurant/@55.963387,-3.200662,15z/data=!4m5!3m4!1s0x0:0x92b0909954f76e4!8m2!3d55.963387!4d-3.200662"
          target="_blank"
          rel="noreferrer"
        >
          <Text>Get directions</Text>
        </a>
        <MapIcon />
        <TextPhone>
          <a href="tel:0131 550 0850">0131 550 0850</a>
        </TextPhone>
        <PhoneIcon />
      </FindDiv>
    </ColumnDiv>
  );
};

const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  @media (max-width: 824px) {
    margin-left: 0;
  }
`;
const RowDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;
const Text = styled.p`
  margin: 6px 10px 0px 0px;
  font-size: 2rem;
  font-weight: 400;
`;
const TextPhone = styled.p`
  font-size: 2.1rem;
  color: #ed4e4e;
  margin: 9px 6px 0px 28px;
  @media (max-width: 824px) {
    margin: 9px 6px 0px 62px;
  }
`;
const ClockIcon = styled(FiClock)`
  font-size: 2.2rem;
  margin-bottom: -8px;
`;
const MapIcon = styled(FiMapPin)`
  font-size: 2.2rem;
  margin-bottom: -6px;
`;
const PhoneIcon = styled(FiPhoneCall)`
  font-size: 2.2rem;
  color: #ed4e4e;
  margin-bottom: -8px;
`;

const OpeningHours = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 32px;
  transition: all 0.3s linear;
  /* &:hover {
    color: #ed4e4e;
  } */
`;
const FindDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  transition: all 0.3s linear;

  &:hover {
    color: #ed4e4e;
  }
`;

export default Opening;
