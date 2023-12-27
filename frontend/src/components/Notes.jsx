import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import NoteContext from "../Context/notes/Notecontext";
import NoteItems from "./NoteItems";
import Addnote from "./Addnote";

const Notes = ({mode}) => {
  const context = useContext(NoteContext);
  const Navigate = useNavigate();
  const { notes, getNote, editNote } = context;
  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: ""
  });

  const OnChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
    e.target.style.height = 'auto'
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleClick = () => {
    editNote(note.id, note.etitle, note.edescription);
    refClose.current.click();
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNote();
    } else {
      Navigate("/login");
    }
  }, []);
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
    });
  };
  return (
    <>
      <Addnote mode={mode} />
      <button type="button" className="d-none btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" ref={ref}>Launch demo modal</button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className={`modal-content b-col bg-${mode} text-${mode=="light"?"dark":"light"}`}>
            <div className="modal-body">
              <div>
                <div>
                  <input type="text" autoComplete="off" className={`form-control bg-${mode} text-${mode=="light"?"dark":"light"} border-0 font-light fs-4`} placeholder="Title" name="etitle" onChange={OnChange} value={note.etitle} />
                </div>
                <div className="mb-3">
                  <input type="text" autoComplete="off" className={`form-control bg-${mode} text-${mode=="light"?"dark":"light"} border-0 font-light`} placeholder="Take a note" name="edescription" onChange={OnChange} value={note.edescription} />
                </div>
              </div>
            </div>
            <div className="text-end">
              <button ref={refClose} type="button" className={`btn note-submit-btn font bg-${mode} text-${mode=="light"?"dark":"light"}`} data-bs-dismiss="modal">Close</button>
              <button type="button" className={`btn bg-${mode} text-${mode=="light"?"dark":"light"} mx-2 note-submit-btn font`} onClick={handleClick}>Edit Note</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {notes.map((note) => {
          return (
            <NoteItems note={note} updateNote={updateNote} key={note._id} mode={mode} />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
