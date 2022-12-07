import { Routes, Route } from "react-router-dom";
// import {useState} from 'react';
import Login from "./views/Login";
import Welcome from "./views/Welcome";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </>
  );
}

export default App;
