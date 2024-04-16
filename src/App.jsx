import React from "react";
import Navbar from "../components/navbar";
import HeroSection from "../components/heroSection";
import Browsethelatestin from "../components/browsethelatestin";
import Getintouch from "../components/getintouch";
import Trending from "../components/trending";
import Myself from "../components/myself";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <HeroSection />
        <Browsethelatestin />
        <Getintouch />
        <Trending />
        <Myself />
      </div>
    </>
  );
}

export default App;
