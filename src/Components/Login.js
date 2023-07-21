import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

const Login = (props) =>  {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    //localhost:5000/api/auth/login
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    //Logic to add in the client
    const json = await response.json();
    console.log(json);
    
    if(json.success){
        localStorage.setItem('token', json.authToken);
        console.log("this is from login token value", localStorage.getItem('token'));
        props.showAlert("Logged in successfully", "success");
        navigate("/");

        
        
    }else{
        props.showAlert("Invalid Credentials", "danger");
       
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div>
     <h2>Login to continue</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            onChange={onChange}
            type="email"
            className="form-control"
            name="email"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={credentials.email}
            required
            minLength={5}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
           onChange={onChange}
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            required
            minLength={5}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        
      </form>
      
      
    </div>
  );
};

export default Login;
