import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const { setUser } = useContext(UserContext); //currently logged in user

  const handleSubmit = (e) => {
    e.preventDefault(); //Prevent page from refreshing
    setUser({ username, password }); // this allows us to set the user contextwith both details
  };

  return (
    <div>
      <h2> Login </h2>
      <input
        type="text"
        value={username}
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Login;
