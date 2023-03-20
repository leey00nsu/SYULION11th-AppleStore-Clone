import { AuthContext } from "../../store/AuthContext";
import { Link } from "react-router-dom";

import { useState, useContext } from "react";

const LoginPage = () => {
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
        <h1>로그인.</h1>

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
          <button type="submit">로그인</button>

          <Link to="/register" style={{ color: "gray", textDecoration: "none" }}>
            Apple ID가 없다면 지금 회원가입.
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
