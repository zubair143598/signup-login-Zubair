import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container con1">
      <div className="container login">
        <div className="row">
          <div className="col-md-12 col1 ">
            <h1>Login form</h1>
            <button type="submit" className="btn1">
              LogIn
            </button>
            <button type="submit" className="btn2">
            <Link className="links" to="/signup">sign up</Link>
            </button>
            <br />
            <label className="lab1" htmlFor="email">Email: </label>
            <input className="email" type="email" placeholder="abc@email.com" />
            <br />
            <label  className=" lab2" htmlFor="">Password: </label>
            <input className="password" type="password" placeholder="*****" />
            <div className="text-center">
            <button className="btn3" type="submit">Login</button>
            </div>
            <p>
              Not a member ? <Link to="/signup">sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
