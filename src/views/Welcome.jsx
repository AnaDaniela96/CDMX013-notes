
import { useNavigate } from "react-router-dom";

import Header from '../components/Header.jsx';
import Footer from "../components/Footer.jsx";

export default function Welcome() {
  
  const navigate = useNavigate()
  return (
    <div className="views">
    <Header/>
       <img
        className="btnNewNote"
        src='https://i.postimg.cc/7Lrp7pBt/edit-square-FILL0-wght400-GRAD0-opsz48.png'
        alt=""
        onClick={() => navigate('createNote')}
      />
    <Footer/>
    </div>
  );
}


