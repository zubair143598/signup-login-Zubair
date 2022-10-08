import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [Email, setUser] = useState("");
  const [password, setPassword]=useState("");

  const handleFun = (event) => {
    event.preventDefault();
    const data = { Email,password};
    console.log(data);
  };

  return (
    <div className="container login ">
      <div className="container con1">
        <div className="row">
          <div className="col-md-12 col1 ">
            <form onSubmit={handleFun}>
              <h1>Login form</h1>
              <button type="submit" className="btn1">
                LogIn
              </button>
              <button type="submit" className="btn2">
                <Link className="links" to="/signup">
                  sign up
                </Link>
              </button>
              <br />

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
              
              <input type="password" className="form-control brd mt-2 p-2"
              value={password}
              onChange={(e)=>
              {
                setPassword(e.target.value)
              }}
              placeholder="enter ur password"
              />
              <div className="text-center">
                <button
                  type="submit"
                  className="btm   batn mt-5 w-100 p-3 rounded-4"
                >
                  Login
                </button>
              </div>
              <p>
                Not a member ? <Link to="/signup">sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
