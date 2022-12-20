import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
//import RequireAuth from "./components/Auth/RequireAuth";
//import {app} from './lib/config.js'
import { getAuth, onAuthStateChanged } from "firebase/auth";

import Login from "./views/Login";
import Welcome from "./views/Welcome";
import NotFound from "./views/NotFound";
import About from "./views/About";
import CreateNote from "./views/CreateNote";
import Feed from "./views/Feed";

function App() {
  const [user, setUser] = useState(null); //{user: 'daniela'}
  const auth = getAuth();

  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      setUser(userFirebase)
      console.log(userFirebase.displayName)
    
    } else {
      setUser(null)
    }
  });
 
  return (
    <Routes>
     
      {user?
      <>
        <Route path="/" element={<Welcome />} />
        <Route path="/createNote" element={<CreateNote />} />
        <Route path="/about" element={<About />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="*" element={<NotFound />} />
      </>
      :<>
        <Route path="/" element={<Login/>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<About />} />
      </>
      }
    </Routes>
  );
}

export default App;
