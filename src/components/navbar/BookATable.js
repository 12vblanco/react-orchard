import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";

const BookATable = ({ setBook, book }) => {
  return (
    <Div>
      <CloseIcon
        stile={{ color: "white" }}
        onClick={() => {
          setBook(!book);
        }}
      />
      <Iframe
        title="book"
        class="iframe"
        src="https://tableagent.com/iframe/the-orchard-bar-restaurant/v/medium/"
      ></Iframe>
    </Div>
  );
};

const Div = styled.div`
  position: absolute;
  top: 150px;
  left: 0;
  text-align: right;
  width: 340px;
  height: 580px;
  padding-top: 1rem;
  padding-bottom: 3rem;
  background: rgba(0, 0, 0, 0.9);
  border-radius: 0 0px 8px 0;
  padding-right: 20px;
`;

const Iframe = styled.iframe`
  height: 490px;
  border-radius: 8px;
`;

const CloseIcon = styled(AiOutlineClose)`
  color: white;
  font-size: 40px;
  margin-right: 12px;
  cursor: pointer;
`;

export default BookATable;
