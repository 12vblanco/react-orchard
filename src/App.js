import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Art from "./components/screens/art/Art";
import Gallery from "./components/screens/gallery/Gallery";
import Home from "./components/screens/home/Home";

function App() {
  return (
    <>
      {" "}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/art" element={<Art />} />
      </Routes>
      <Footer />
      {/* <Home /> */}
    </>
  );
}

export default App;
