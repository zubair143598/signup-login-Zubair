import React from "react";
import Logout from "../Components/Element/Logout";
import SignUp from "../Components/Element/SignUp";

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12 text-center">
          <div className="text-white">
            <h1>Home</h1>
            <Logout />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
