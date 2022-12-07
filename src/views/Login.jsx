import { loginWithGoogle } from "../lib/auth";

export default function Login() {
  return (
    <div className="form">
      <h1>Motivation</h1>
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
      <footer>Created by @anadaniela for Laboratoria-2022</footer>
    </div>
  );
}
