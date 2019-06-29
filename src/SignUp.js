import React, { useCallback } from "react";
import { withRouter} from "react-router";
import { Link } from 'react-router-dom';
import app from "./firebaseConfig";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input autoComplete="username email" name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input autoComplete="current-password" name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
      <Link to="/">Home</Link>
    </div>
  );
};

export default withRouter(SignUp);