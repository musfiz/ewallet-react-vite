const Login = () => {
  return (
    <>
      <div className="login">
        <form action="#" method="post">
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{ alignItems: "center" }}
          >
            {" "}
            E-Wallet
          </h1>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span
                className="input-group-text"
                style={{ padding: "0px 26px" }}
              >
                Email
              </span>
            </div>
            <input
              type="email"
              name="email"
              className="form-control"
              required
              autofocus
              placeholder="Email"
              value=""
            />

            {/* <div className="invalid-feedback">
              
          </div> */}
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Password</span>
            </div>
            <input
              type="password"
              name="password"
              className="form-control"
              required
              placeholder="Password"
            />
            {/* @if ($errors->has('password'))
            <div className="invalid-feedback">
                {{ $errors->first('password') }}
            </div>
          @endif */}
          </div>

          <button className="btn btn-success btn-block" type="submit">
            <i className="fas fa-sign-in-alt"></i> Sign in
          </button>
          <hr />
        </form>

        <a
          className="btn btn-primary btn-block disabled"
          title="This feature currently not available"
        >
          <i className="fas fa-user-plus"></i> Sign up New Account
        </a>
        <br />
      </div>
      <footer className="footer text-center">
        <div className="container">
          <p className="text-muted">
            Copyright &copy 2023, E Wallet
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
