/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../style/Styles.css";

function Login() {
  return (
    <div>
      <div>
        <header>
          <h3>
            Met<span>Life</span>
          </h3>
        </header>
      </div>
      <div class="main">
        <p class="sign" align="center">
          Sign in
        </p>
        <form class="form1">
          <input
            class="un "
            type="text"
            align="center"
            placeholder="Employee ID"
          />
          <input
            class="pass"
            type="password"
            align="center"
            placeholder="Password"
          />
          <a
            class="submit"
            align="center"
            onClick={(event) => (window.location.href = "/view")}
          >
            Sign in
          </a>
        </form>
      </div>
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>
            Met<span>Life</span>
          </h3>
          <p class="footer-company-name">MetLife © 2015</p>
        </div>
      </footer>
    </div>
  );
}

export default Login;
