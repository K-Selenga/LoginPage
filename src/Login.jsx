import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    console.log(`Remember Me: ${rememberMe}`);
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
              <button type="submit">Sign In</button>
            </div>
            <div>
              <a href="#">Forgot your password?</a>
              <a href="#">Sign up</a>
              <a href="#">Continue as guest</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
