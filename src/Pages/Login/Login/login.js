import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Navigation from "../../Shared/Navigation/Navigation";
import "./Login.css";
import image from "../../../images/login.jpg";

const Login = () => {
  const { handleUserRegister, handleUserLogin, handleUserName } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const toggleLogin = (e) => {
    setIsLogin(e.target.checked);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    isLogin
      ? handleUserLogin(email, password)
          .then((result) => {
            console.log(result.user);
            history.push(redirect_url);
          })
          .catch((error) => {
            setError(error.message);
          })
      : handleUserRegister(email, password, name)
          .then((result) => {
            const user = result.user;
            console.log(user);
            handleUserName(name);
            history.push(redirect_url);
            window.location.reload();
          })
          .catch((error) => {
            setError(error.message);
          });
  };
  return (
    <div className="text-center container login box-shadow mb-5 mt-5">
      <Navigation />
      <section style={{ height: "100%" }} className="container mt-5">
        <h2 className="text-center pt-5 fw-bold">LOGIN FROM</h2>
        <div className="row align-items-center py-5">
          <div className="col-md-6 pe-5">
            <img className="img-fluid p-5" src={image} alt="" />
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSignUp}>
              <h3 className="pb-5 pt-5 fw-bold">
                Please {isLogin ? "Login" : "Register"}
              </h3>
              {!isLogin && (
                <div className="row mb-3">
                  <label
                    htmlFor="inputEmail3"
                    className=" col-sm-2 col-form-label"
                  >
                    Name
                  </label>
                  <div className="col-sm-10">
                    <input
                      onBlur={handleNameChange}
                      type="text"
                      className="form-control"
                      placeholder=""
                      required
                    />
                  </div>
                </div>
              )}
              <div className="row">
                <label htmlFor="inputName" className=" col-sm-2 col-form-label">
                  Email
                </label>
                <div className="col-sm-10">
                  <input
                    onBlur={handleEmailChange}
                    type="email"
                    className="form-control"
                    id="inputName"
                    required
                  />
                </div>
              </div>
              <div className="row mt-3 mb-3">
                <label
                  htmlFor="inputPassword3"
                  className="col-sm-2 col-form-label "
                >
                  Password
                </label>
                <div className="col-sm-10">
                  <input
                    onBlur={handlePasswordChange}
                    type="password"
                    className="form-control"
                    id="inputPassword3"
                    required
                  />
                </div>
              </div>
              <div className="row mt-3 mb-3">
                <label
                  htmlFor="inputPassword3"
                  className="col-sm-2 col-form-label"
                >
                  Confirm Password
                </label>
                <div className="col-sm-10">
                  <input
                    onBlur={handlePasswordChange}
                    type="password"
                    className="form-control"
                    id="inputPassword3"
                    required
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-10 offset-sm-2">
                  <div className="form-check">
                    <input
                      onChange={toggleLogin}
                      className="form-check-input "
                      type="checkbox"
                      id="gridCheck1"
                    />
                    <label className="form-check-label" htmlFor="gridCheck1">
                      Already Have an Account?
                    </label>
                  </div>
                </div>
              </div>
               <div className="text-danger">{error}</div>
              <button type="submit" className="btn btn-style px-3">
                   {isLogin ? "Login" : "Register"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
