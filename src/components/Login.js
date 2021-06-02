import React, { useState } from "react";
import "./Login.scss";
import { auth } from "./../firebase";
import { useHistory } from "react-router-dom";
const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    console.log("sign in");
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const createNewAccount = (e) => {
    e.preventDefault();
    console.log("create new account");

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //successfully created a new user
        console.log("successfully created");
        console.log(auth);
        //redirect if there is auth
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));

    //firebase login
  };
  return (
    <div id="login">
      <div className="login-container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-button" onClick={signIn} type="submit">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the Conditions and Use & Sale. Please see
          our Privacy Notice, our Cookies Notice and our Internet-Based Ads
          Notice.
        </p>
        <button className="create-button" onClick={createNewAccount}>
          Create new Account
        </button>
      </div>
    </div>
  );
};

export default Login;
