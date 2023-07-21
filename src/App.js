import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import Alert from "./Components/Alert";
import Signup from "./Components/Signup";
import { useState } from "react";
import Login from "./Components/Login";



function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}

  return (
    <>
    <NoteState> 
        <Router>
          <Navbar/>
          <Alert alert ={alert}/>
          <div className="container">  
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home showAlert = {showAlert} />
                </>
              }
            />
            <Route path="/About" element={<About />} />
            <Route path="/login" element={<Login showAlert = {showAlert}/>} />
            <Route path="/signup"  element={<Signup showAlert = {showAlert}/>} />
   

          </Routes>
          </div>
        </Router>
  
        </NoteState>
    </>
  );
}

export default App;
