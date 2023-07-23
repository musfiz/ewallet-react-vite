import { useState, useEffect } from "react";
import serverApi from "../api/ServerApi";
import Cookies from "universal-cookie";
const cookies = new Cookies();
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const isAuth = cookies.get("isAuth");
    const user = cookies.get("user");
    if (isAuth && user) {
      navigate("/dashboard");
    }
  }, []);

  const [isSubmit, setIsSubmit] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formDataError, setFormDataError] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleValidation = () => {
    if (!formData.email) {
      setFormDataError((formDataError) => ({
        ...formDataError,
        email: "Email is required!",
      }));
    }
    if (!formData.password) {
      setFormDataError((formDataError) => ({
        ...formDataError,
        password: "Password is required!",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    handleValidation();
    if (formData.email && formData.password) {
      const response = serverApi.post("login", formData, {});
      response.then((response) => {
        setIsSubmit(false);
        if (response.data.success) {
          // change(response.data.data);
          cookies.set("user", response.data.data.user);
          cookies.set("isAuth", true);
          navigate("/dashboard");
        }
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
            {!isSubmit ? (
              <button className="btn btn-success btn-flat" type="submit">
                <FontAwesomeIcon icon="fa-sign-in-alt" /> Sign in
              </button>
            ) : (
              <button className="btn btn-success btn-flat" disabled>
                <span className="spinner-border spinner-border-sm"></span>{" "}
                Loading...
              </button>
            )}
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
