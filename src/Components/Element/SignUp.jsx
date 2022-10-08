import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [Email, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleFun = (event) => {
    event.preventDefault();
    const data = { name, Email, password };
    console.log(data);
  };

  return (
    <div className="container signup">
      <div className="container con1">
        <div className="row">
          <form onSubmit={handleFun}>
            <div className="col-md-12 col2 ">
              <h1 className="h1">SignUp form</h1>
              <button type="submit" className="btn1">
                <Link className="links" to="/login">
                  LogIn
                </Link>
              </button>
              <button type="submit" className="btn2">
                SignUP
              </button>

              <input
                className="form-control brd mt-4 p-2 "
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Enter ur name"
              />

              <input
                type="email"
                className="form-control brd mt-4 p-2"
                value={Email}
                onChange={(e) => {
                  setUser(e.target.value);
                }}
                placeholder="enter ur Email"
              />
              <br />

              <input
                type="password"
                className="form-control brd mt-2 p-2"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="enter ur password"
              />
              <button
                type="submit"
                className="btm   batn mt-5 w-100 p-3 rounded-4"
              >
                Sign Up
              </button>
              <p>
                if member ? <Link to="/login">LogIn</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
