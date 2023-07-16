import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import Alert from "./Components/Alert";



function App() {
  return (
    <>
    <NoteState> 
        <Router>
          <Navbar/>
          <Alert message = "We will rise again."/>
          <div className="container">  
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                </>
              }
            />
            <Route path="/About" element={<About />} />
   
          </Routes>
          </div>
        </Router>
  
        </NoteState>
    </>
  );
}

export default App;
