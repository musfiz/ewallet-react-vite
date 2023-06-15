import { useState, useEffect } from "react";
import user from "./../api/User";
import Cookies from "universal-cookie";
const Login = () => {
  const cookie = new Cookies();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formDataError, setFormDataError] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (formData.email) {
      setFormDataError({ ...formDataError, email: "" });
    }
    if (formData.password) {
      setFormDataError({ ...formDataError, password: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (user.email === formData.email && user.password === formData.password) {
    //   cookie.set("token", user.token);
    // } else if {
    //   //
    // }
    if (!formData.email) {
      setFormDataError({ ...formDataError, email: "Email is required!" });
    }
    if (!formData.password) {
      setFormDataError({
        ...formDataError,
        password: "Passsword is required!",
      });
    }
  };

  return (
    <>
      <div className="login">
        <form onSubmit={handleSubmit}>
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{ textAlign: "center" }}
          >
            E-Wallet
          </h1>

          <div className="input-group mb-3">
            <span
              className="input-group-text"
              id="email"
              style={{ padding: "0 26px" }}
            >
              Email
            </span>
            <input
              type="text"
              className={`form-control ${
                formDataError.email ? "is-invalid" : ""
              }`}
              placeholder="Email"
              aria-label="Email"
              aria-describedby="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {formDataError.email ? (
              <div className="invalid-feedback">{formDataError.email}</div>
            ) : (
              ""
            )}
          </div>
          <div className="input-group mb-3">
            <span
              className="input-group-text"
              id="Password"
              style={{ padding: "0 11px" }}
            >
              Passowrd
            </span>
            <input
              type="password"
              className={`form-control ${
                formDataError.password ? "is-invalid" : ""
              }`}
              placeholder="Password"
              aria-label="Password"
              aria-describedby="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {formDataError.password ? (
              <div className="invalid-feedback">{formDataError.password}</div>
            ) : (
              ""
            )}
          </div>
          <div className="d-grid">
            <button className="btn btn-success btn-flat" type="submit">
              <i className="fas fa-sign-in-alt"></i> Sign in
            </button>
          </div>

          <hr />
        </form>

        <a
          className="btn btn-primary btn-flat disabled"
          title="This feature currently not available"
        >
          <i className="fas fa-user-plus"></i> Sign up New Account
        </a>
        <br />
      </div>
      <footer className="footer text-center">
        <div className="container">
          <p className="text-muted">
            Copyright © 2023, E Wallet
            <br />
            Created by{" "}
            <a target="_blank" href="http://mustafiz.info">
              Mustafizur Rahman
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Login;
