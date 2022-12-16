
import { SignOut } from '../lib/auth.js';
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  //create signOff button
  const signOff = document.createElement('img');
  signOff.setAttribute('src', 'https://i.postimg.cc/HW6M6BCg/Sign-off.png');
  //useNavigate
  const navigate = useNavigate()
  return (
    <div>
      <p>Bienvenida a tus notas aquí tienes que llegar cuando entres sesión. Una vez autentificada llegas acá.</p>
       <img
      className="newNote"
        src='https://i.postimg.cc/7Lrp7pBt/edit-square-FILL0-wght400-GRAD0-opsz48.png'
        alt=""
        onClick={() => navigate('createNote')}
      />
      <img
      className="singOffButton"
        src='https://i.postimg.cc/HW6M6BCg/Sign-off.png'
        alt=""
        onClick={() =>
          SignOut()
        }
      />
    </div>
  );
}


