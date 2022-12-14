import React from "react";
import ReactDOM from "react-dom";

import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";
import loading from "./loading.png";

const Backdrop = ({ setBook, book }) => {
  return (
    <BackdropDiv
      onClick={() => {
        setBook(!book);
      }}
    />
  );
};

const BurgerOverlay = ({ setBook, book }) => {
  return (
    <Div>
      <RowDiv>
        <CloseText
          onClick={() => {
            setBook(!book);
          }}
        >
          CLOSE
        </CloseText>
        <CloseIcon
          stile={{ color: "white" }}
          onClick={() => {
            setBook(!book);
          }}
        />
      </RowDiv>
      <IframeDiv>
        <Iframe
          title="book"
          className="iframe"
          src="https://tableagent.com/iframe/the-orchard-bar-restaurant/v/medium/"
        ></Iframe>
      </IframeDiv>
    </Div>
  );
};

const portalElement = document.getElementById("burger");

const BookATable = ({ setBook, book }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop setBook={setBook} book={book} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <BurgerOverlay setBook={setBook} book={book} />,
        portalElement
      )}
    </>
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
  background: rgba(0, 0, 0, 0.94);
  border-radius: 0 0px 8px 0;
  padding-right: 20px;
`;

const RowDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Iframe = styled.iframe`
  height: 490px;
  border-radius: 8px;
`;

const CloseIcon = styled(AiOutlineClose)`
  color: white;
  font-size: 36px;
  margin-right: 12px;
  cursor: pointer;
`;

const CloseText = styled.p`
  font-size: 18px;
  cursor: pointer;
`;

const IframeDiv = styled.div`
  background: url(${loading}) center center no-repeat;
`;

const BackdropDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0);
`;

export default BookATable;
