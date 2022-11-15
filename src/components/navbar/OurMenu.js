import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";
import { menus } from "./Menus";

const OurMenu = ({ setOurMenu, ourMenu }) => {
  return (
    <Div>
      <CloseIcon
        stile={{ color: "white" }}
        onClick={() => {
          setOurMenu(!ourMenu);
        }}
      />
      {menus.map((menu, i) => (
        <Ul>
          <Li key={i}>
            <a href={menu.link}>{menu.name}</a>
          </Li>
        </Ul>
      ))}
    </Div>
  );
};

const Div = styled.div`
  position: absolute;
  top: 150px;
  left: 0;
  text-align: right;
  width: 340px;
  height: auto;
  padding-top: 1rem;
  padding-bottom: 3rem;
  background: rgba(0, 0, 0, 0.9);
  border-radius: 0 0px 8px 0;
`;
const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
`;
const Li = styled.li`
  font-size: 19px;
  font-weight: 700;
  margin: 1.4rem;
`;

const CloseIcon = styled(AiOutlineClose)`
  color: white;
  font-size: 40px;
  margin-right: 12px;
  cursor: pointer;
`;

export default OurMenu;
