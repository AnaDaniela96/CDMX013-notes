import { SignOut } from '../lib/auth.js';

//falta que p en lugar de ser un párrafo sea una función que reciba el user name y lo coloqué ahí

export default function Header() {
  return(
    <header className='header'>
    <p className='nameUser'>
      UserName
    </p>
    <img
      className="singOffButton"
        src="https://i.postimg.cc/rFpxYGsS/logout-FILL0-wght400-GRAD0-opsz48.png"
        alt=""
        onClick={() =>
          SignOut()
        }
      />
    </header>
  )
}
