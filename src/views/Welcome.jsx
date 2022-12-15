import { SignOut } from '../lib/auth.js';

export default function Welcome() {
  const signOff = document.createElement('img');

  signOff.setAttribute('src', 'https://i.postimg.cc/HW6M6BCg/Sign-off.png');
  return (
    <div>
      <p>Bienvenida a tus notas aquí tienes que llegar cuando entres sesión. Una vez autentificada llegas acá.</p>
      <img
      className="singOffButton"
        src="https://i.postimg.cc/c1Trf3qD/btn-google-signin-light-normal-web.png"
        alt=""
        onClick={() =>
          SignOut()
        }
      />
    </div>
  );
}


