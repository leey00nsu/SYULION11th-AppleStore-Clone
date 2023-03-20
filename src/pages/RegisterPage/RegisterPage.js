import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../store/AuthContext";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userLogin } = useContext(AuthContext);

  const changeEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const changePasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    userLogin(email, password);
  };
  return (
    <div className="pageWrapper">
      <div className="auth-wrapper">
        <h1>회원가입.</h1>

        <form onSubmit={formSubmitHandler}>
          <input
            onChange={changeEmailHandler}
            placeholder="Apple ID"
            type="email"
            value={email}
          />
          <input
            onChange={changePasswordHandler}
            placeholder="암호"
            type="password"
            name="password"
            value={password}
          />
          <button type="submit">회원가입</button>

          <Link to="/login" style={{ color: "gray", textDecoration: "none" }}>
            이미 Apple ID가 있다면? 지금 로그인.
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
