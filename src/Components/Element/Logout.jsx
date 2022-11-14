import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate=useNavigate();
  const handleAction = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/signup")
        toast.error("// Sign-out successful.");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      <ToastContainer />
      <button onClick={handleAction} className="btn btn-warning">
        LogOut
      </button>
    </>
  );
};

export default Logout;
