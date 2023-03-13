import React from "react";
import MainContent from "../components/MainContent";
import Navigation from "../components/Navigation";
import Trending from "../components/Trending";

const Home = () => {
  return (
    <div>
      <div className="main-flex">
        <Navigation />
        <MainContent />
        <Trending />
      </div>
    </div>
  );
};

export default Home;
