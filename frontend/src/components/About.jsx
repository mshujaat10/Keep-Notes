import React, { useContext } from "react";
import NoteContext from "../Context/notes/Notecontext";

const About = () => {
  const a = useContext(NoteContext);

  return (
    <div>
      <h1>
        This is About and name is {a.name} and class was {a.Class}
      </h1>
    </div>
  );
};

export default About;
