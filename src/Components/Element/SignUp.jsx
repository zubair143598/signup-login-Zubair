import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { app, db } from "./Firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { setDoc, doc } from "firebase/firestore";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAction = () => {
    const auth = getAuth();
    console.log("done");
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        toast.info("register successfully");
        navigate("/Home");

        setDoc(doc(db, "users", res.user.uid), {
          
          email: email,
          password: password,

        }).then(() => {
          console.log("done2");
        });
      })
      .catch((error) => {
          // toast.error("Please check the Password");
        // if (error.code === "auth/wrong-password") {
        // }
        // if (error.code === "auth/user-not-found") {
        //   toast.error("Please check the Email");
        // }
      });
  };

  // const handleInput = () => {
  //   // console.log(name);
  //   // console.log(email);
  //   // console.log(password);
  //   const data = { name, email, password };
  //   console.log(data);
  //   localStorage.setItem("datakey", JSON.stringify(data));
  //   sessionStorage.setItem("darakey", JSON.stringify(data));
  // };

  return (
    <div className="container signup">
      <ToastContainer />
      <div className="container con1">
        <div className="row">
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
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter ur name"
            />

            <input
              type="email"
              className="form-control brd mt-4 p-2"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="enter ur Email"
            />
            <br />

            <input
              type="password"
              className="form-control brd mt-2 p-2"
              name="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="enter ur password"
            />
            <button
              type="submit"
              className="btm   batn mt-5 w-100 p-3 rounded-4"
              onClick={handleAction}
            >
              Sign Up
            </button>
            <p>
              if member ? <Link to="/login">LogIn</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
