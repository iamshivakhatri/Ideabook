import React,{useState} from "react";
import { useNavigate } from "react-router-dom";


const Signup = () => {
    
 const [info, setInfo] = useState({name:"",email:"", password:"", cpassword:""});
 let navigate = useNavigate();


 const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log(info.name, info.password, info.email);
 
        //localhost:5000/api/auth/login
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: info.name,
            email: info.email,
            password: info.password,

          }),
        });
    
        //Logic to add in the client
        const json = await response.json();
        console.log(json);
        if(json.success){
             localStorage.setItem('token', json.authtoken);
             navigate("/");
        }
       // localStorage.setItem('token', json.authtoken);
       // navigate("/");
   
      
 };

 const onChange = (e)=>{
    setInfo({...info,[e.target.name]: e.target.value});
};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            aria-describedby="emailHelp"
            placeholder="Enter Name"
            onChange={onChange}
            value={info.name}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            onChange={onChange}
            value={info.email}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            onChange={onChange}
            value={info.password}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Confirm Password</label>
          <input
            name="cpassword"
            type="password"
            className="form-control"
            id="cpassword"
            placeholder="Password"
            onChange={onChange}
            value={info.cpassword}

          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
