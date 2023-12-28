import React from "react";
import CookieConsent from "react-cookie-consent";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Art from "./components/screens/art/Art";
import Gallery from "./components/screens/gallery/Gallery";
import Home from "./components/screens/home/Home";
import Terms from "./components/screens/terms";

function App() {
  return (
    <>
      <CookieConsent
        containerClasses="cookie_container"
        buttonText="Accept"
        style={{
          background: "rgba(20, 20, 20, 0.9)",
          fontWeight: "500",
          height: "fit-content",
          alignItems: "center",
          fontSize: "17px",
        }}
        buttonStyle={{
          borderRadius: "50px",
          padding: "14px 26px",
          marginRight: "16px",
          fontSize: "18px",
          fontWeight: "700",
          background: "white",
          color: "rgba(20, 20, 20, 0.9)",
        }}
        contentStyle={{
          textAlign: "left",
          marginBottom: "18px",
          padding: "12px",
        }}
      >
        {" "}
        We use cookies in our website like most websites do. nothing sinister,
        just to offer a better experience. By clicking “Accept”, you consent to
        the use of these the cookies. To learn more about how we use cookies and
        your rights, please read our
        <Span>
          <a href="/terms"> Terms of Service</a>
        </Span>
        .
      </CookieConsent>{" "}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/art" element={<Art />} />
      </Routes>
      <Footer />
      {/* <Home /> */}
    </>
  );
}

const Span = styled.span`
  a {
    color: var(--gold);
    text-decoration: underline;
  }
`;

export default App;
