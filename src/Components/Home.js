
import React, { useContext } from "react";
import NoteState from "../context/notes/NoteState";
import noteContext from "../context/notes/noteContext";


export const Home = () => {
    const context = useContext(noteContext);
    const{notes, setNots} = context;
  return (
    <>
      <div className="container my-3">
        <h2>Add a Note</h2>
        <form>
          <div class="form-group my-3">
            <label for="exampleInputEmail1">Title</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted">
          
            </small>
          </div>
          <div class="form-group my-3">
            <label for="exampleInputPassword1">Descriptions</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
        
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      <div className="container">
        <h2>Your note</h2>
     

        {notes.map((note) =>{
            return (
                note.title
            )
                

        
        }

        )}
      </div>
    </>
  );
};

export default Home;
