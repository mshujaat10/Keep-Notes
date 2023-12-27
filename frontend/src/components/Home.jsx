import React from "react";
import Notes from "./Notes";

const Home = ({mode}) => {
  return (
    <div className="container">
      <Notes mode={mode} />
    </div>
  );
};

export default Home;
