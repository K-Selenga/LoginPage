import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        email: email,
        password: password,
        rememberMe: rememberMe,
      });
      if (response.data.success) {
        alert("Login successful");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error: ", error);
      alert("An error occurred while logging in");
    }
  };

  return (
    <>
      <div className="login">
        <div className="login__box">
          <form onSubmit={handleSubmit} className="login__box--form">
            <h2 className="login__box--form--title">Sign in</h2>
            <div className="login__box--form--content">
              <h3 className="login__box--form--content--title2">Email</h3>
              <input
                className="login__box--form--content--input"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder=""
                required
              />
              <h3 className="login__box--form--content--title2">Password</h3>
              <input
                className="login__box--form--content--input"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder=""
                required
              />
              <label className="container">
                {" "}
                Remember me?
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) => setRememberMe(event.target.checked)}
                />
                <span className="checkmark"></span>
              </label>
              <button className="button" type="submit">
                Sign In
              </button>
            </div>
            <div className="login__box--form--links">
              <a className="login__box--form--links--forgotPsw" href="#">
                Forgot your password?
              </a>
              <p className="container">
                Don't have an account?
                <a className="login__box--form--links--signIn" href="#">
                  {" "}
                  Sign up
                </a>
              </p>
              <a className="login__box--form--links--reSend" href="#">
                Resend email confirmation
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
