import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  const handleAction = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        navigate("/Home")
        toast.info("log in successfully");
        
        // ...
      })
      .catch((e) => {
        if (e.code === "auth/wrong-password") {
          toast.error("please check the password");
        }
        if (e.code === "auth/user-not-found") {
          toast.error("please check the email");
        }
      });
  };
  const handleFun = () => {
    const data = { email, password };
    console.log("🚀 ~ file: Login.jsx ~ line 11 ~ Login ~ data", data);
    console.log(data);
    localStorage.setItem("datakey", JSON.stringify(data));
    sessionStorage.setItem("darakey", JSON.stringify(data));
  };

  return (
    <div className="container login ">
      <ToastContainer/>
      <div className="container con1">
        <div className="row">
          <div className="col-md-12 col1 ">
            {/* <form onSubmit={handleFun}> */}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
            />
            <br />

            <input
              type="password"
              className="form-control brd mt-2 p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="enter ur password"
            />
            <div className="text-center">
              <button
                type="submit"
                className="btm   batn mt-5 w-100 p-3 rounded-4"
                onClick={handleAction}
              >
                Login
              </button>
            </div>
            <p>
              Not a member ? <Link to="/signup">sign up</Link>
            </p>
            
            {/* </form> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
