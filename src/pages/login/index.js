import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [loginForm, setLoginFormData] = useState({
    email: '',
    password: ''
  });

  //events
  function onChangeField(event) {
    event.preventDefault();

    const { name, value } = event.target;
    setLoginFormData({
      ...loginForm,
      [name]: value,
    });
  }

  function loginUser(event) {
    event.preventDefault();

    console.log(loginForm);
    navigate('/', { replace: true});
  }

  return (
    <div className="container-fluid vh-100 w-100 todo-gradient-bg d-flex flex-column justify-content-center align-items-center p-5">
      <div className="d-flex card custom-card w-50 my-1 p-5">
        <div className="row col-12 my-2 text-center">
          <i className="bi bi-check2 app-icon"></i>
          <p className="display-5">Welcome Back</p>
          <p className="text-body-secondary">Enter with your email and password</p>
        </div>
        <form id="todo-login-form row" onSubmit={loginUser}>
          <div className="col-12 mb-4">
            <label htmlFor="login_email" className="form-label">Email</label>
            <input type="email" className="form-control" id="login_email" name="email" value={loginForm.email} onChange={onChangeField} />
          </div>
          <div className="col-12">
            <label htmlFor="login_password" className="form-label">Password</label>
            <input type="password" className="form-control" id="login_password" name="password" value={loginForm.password} onChange={onChangeField} />
          </div>

          <button type="submit" className="btn btn-primary mt-4 mb-2 w-100">Login</button>
        </form>

        <Link to="/signin" replace className="btn btn-light" role="button">Dont have an account?</Link>
      </div>
    </div>
  );
}

export default Login;
