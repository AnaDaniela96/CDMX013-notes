
import { useNavigate } from "react-router-dom";

import Header from '../components/Header.jsx';
import Footer from "../components/Footer.jsx";

export default function Welcome() {
  //create signOff button
  const signOff = document.createElement('img');
  signOff.setAttribute('src', 'https://i.postimg.cc/HW6M6BCg/Sign-off.png');
  //useNavigate
  const navigate = useNavigate()
  return (
    <div className="views">
    <Header/>
       <img
      className="newNote"
        src='https://i.postimg.cc/7Lrp7pBt/edit-square-FILL0-wght400-GRAD0-opsz48.png'
        alt=""
        onClick={() => navigate('createNote')}
      />
    <Footer/>
    </div>
  );
}


