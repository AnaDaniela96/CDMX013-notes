import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./views/Login";
import Welcome from "./views/Welcome";
import NotFound from "./views/NotFound";
import About from "./views/About";



import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Routes>
      <Route path="/" element={user ? <Welcome /> : <Login setUser={setUser} />} />
      <Route path="/about" element={<About/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}

export default App;
