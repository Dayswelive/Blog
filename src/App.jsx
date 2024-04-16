import React from "react";
import Navbar from "../components/navbar";
import HeroSection from "../components/heroSection";
import Browsethelatestin from "../components/browsethelatestin";
import Getintouch from "../components/getintouch";
import Trending from "../components/trending";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <HeroSection />
        <Browsethelatestin />
        <Getintouch />
        <Trending />
      </div>
    </>
  );
}

export default App;
