import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NoteState from "./Context/notes/NoteState";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light")
  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark")
      document.body.style.backgroundColor = '#212529';
      document.body.style.color = 'white';
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }

  }
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar toggleMode={toggleMode} mode={mode} />
          <Routes>
            <Route path="/" element={<Home mode={mode} />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
