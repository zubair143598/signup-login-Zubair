import React, { useState } from "react";

function Login1() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  console.log(name);
  const handleInput = () => {
      console.log(email);
  };
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <input type="email"  
      value={email}
      onChange={(e)=> setEmail(e.target.value)}
      />
      <button className="btn-btn-primary"
      onClick={handleInput}
      >
        Submit
      </button>
    </>
  );
}

export default Login1;
