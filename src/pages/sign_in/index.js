import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

function Signin() {
  const navigate = useNavigate();
  const [signinForm, setSigninFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  //events
  function onChangeField(event) {
    event.preventDefault();

    const { name, value } = event.target;
    setSigninFormData({
      ...signinForm,
      [name]: value,
    });
  }

  function signinUser(event) {
    event.preventDefault();

    console.log(signinForm);
    navigate('/', { replace: true});
  }

  return (
    <div className="container-fluid vh-100 w-100 todo-gradient-bg d-flex flex-column justify-content-center align-items-center p-5">
      <div className="d-flex card custom-card w-50 my-1 p-5">
        <div className="row col-12 my-2 text-center">
          <i className="bi bi-check2 app-icon"></i>
          <p className="display-5">Sign in</p>
          <p className="text-body-secondary">Create an account and get started!</p>
        </div>
        <form id="todo-login-form row" onSubmit={signinUser}>
          <div className="col-12 mb-4">
            <label htmlFor="signin_name" className="form-label">Name</label>
            <input type="text" className="form-control" id="signin_name" name="name" value={signinForm.name} onChange={onChangeField} />
          </div>
          <div className="col-12 mb-4">
            <label htmlFor="signin_email" className="form-label">Email</label>
            <input type="email" className="form-control" id="signin_email" name="email" value={signinForm.email} onChange={onChangeField} />
          </div>
          <div className="col-12">
            <label htmlFor="signin_password" className="form-label">Password</label>
            <input type="password" className="form-control" id="signin_password" name="password" value={signinForm.password} onChange={onChangeField} />
          </div>

          <button type="submit" className="btn btn-primary mt-4 mb-2 w-100">Sign in</button>
        </form>

        <Link to="/login" replace className="btn btn-light" role="button">Already have an account?</Link>
      </div>
    </div>
  );
}

export default Signin;
