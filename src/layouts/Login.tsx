const Login = () => {
  return (
    <>
      <div className="login">
        <form action="#" method="post">
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{ textAlign: "center" }}
          >
            {" "}
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
              className="form-control"
              placeholder="Email"
              aria-label="Email"
              aria-describedby="email"
            />
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
              type="text"
              className="form-control"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="Password"
            />
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
