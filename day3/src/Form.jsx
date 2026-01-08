import React, { useContext } from 'react'
import { Context } from './Login';
import "./Form.css";

function Form() {
  const {states,dispatch}=useContext(Context);
 const handleclick = () => {
    if (states.username === ""||states.password === "") {
      dispatch({ type: "err", payload: "Fields are empty " });
      return;
    }

    if (states.username === "john" && states.password === "john@123") {
      dispatch({ type: "logindone", payload: "Login Success !" })
    }
    else {
      dispatch({ type: "err", payload: "invalid" })
    }
  }
  if (states.login) {
  return (
    <div className="box">
      <h2>Welcome, {states.username}!</h2>
      <button onClick={() => dispatch({ type: "logout" })}>Logout</button>
    </div>
  );
}

  return (
    <div>
      <div className="form">
          <h3>Form Validation </h3>
        <input type="text" value={states.username} onChange={(e) => dispatch({ type: "username", payload: e.target.value })} />
        <input type="text" value={states.password} onChange={(e) => dispatch({ type: "password", payload: e.target.value })} />
        <button onClick={handleclick}>submit</button>
        {states.err&&<p style={{ color: "red" }}>{states.err}</p>}

      </div>




    </div>
  )
}

export default Form