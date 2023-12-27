import React, { useState, useRef, useContext } from "react";
import NoteContext from "../Context/notes/Notecontext";

const Addnote = (props) => {
  const context = useContext(NoteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "" });

  const OnChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
    e.target.style.height = 'auto'
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const AddNote = () => {
    addNote(note.title, note.description);
    setNote({ title: "", description: "" })
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="mt-5 add-note-inputs rounded py-2">
          <textarea className={`font-lg form-control rounded-0 border-0 text-${props.mode === "dark" ? "light" : "dark"} bg-${props.mode === "light" ? "white" : "dark"}`} placeholder='Title' id="exampleFormControlTextarea1" name='title' value={note.title} rows="1" onChange={OnChange}></textarea>
          <textarea className={`font form-control rounded-0 border-0 text-${props.mode === "dark" ? "light" : "dark"} bg-${props.mode === "light" ? "white" : "dark"}`} placeholder='Take a note..' id="exampleFormControlTextarea2" name='description' value={note.description} rows="1" onChange={OnChange}></textarea>
          <div className="text-end">
            <button type="submit" onClick={AddNote} className={`bg-${props.mode} note-submit-btn rounded-0 py-1 px-4 text-${props.mode=="light"?"dark":"light"} btn font`}>Add Note</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addnote;
