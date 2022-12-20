import { loginWithGoogle } from "../lib/auth";

import Footer from "../components/Footer";

export default function Login() {
  
  return (
    <div className="views">
      <h1 id='Motivation'>Motivation</h1>
      <img
        className="google-logo"
        src="https://i.postimg.cc/c1Trf3qD/btn-google-signin-light-normal-web.png"
        alt=""
        onClick={() =>
          loginWithGoogle()
          .then((user) => console.log(user))
          .catch((error) => console.log(error))
        }
      /> 
      <Footer/>
    </div> 
  );
}
