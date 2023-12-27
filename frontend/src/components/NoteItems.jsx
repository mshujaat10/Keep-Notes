import React, { useContext } from "react";
import NoteContext from "../Context/notes/Notecontext";

const NoteItems = (props) => {
  const { note,updateNote } = props;
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  return (
    <div className="col-lg-3 col-md-5">
      <div className={`card my-3 bg-${props.mode} py-1 b-col`}>
        <div className={`card-body bg-${props.mode=="light"?"white":"dark"} text-${props.mode=="light"?"dark":"light"}`}>
          <h5 className="card-title font-lg">{note.title}</h5>
          <p className="card-text font-lg">{note.description}</p>
          <span className="material-symbols-outlined pointer" onClick={()=>{updateNote(note)}}>edit_square</span>
          <span
            className="material-symbols-outlined pointer"
            onClick={() => deleteNote(note._id)}
          >
            delete
          </span>
        </div>
      </div>
    </div>
  );
};

export default NoteItems;
