
import React, {useContext, useEffect} from "react";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
import noteContext from '../context/notes/noteContext';

export const Notes = () => {
    const context = useContext(noteContext);
    const {notes, getNotes} = context;



    useEffect(() => {
      
        console.log("hey guys")
        getNotes();
    }, [])
    
    

  return (

    <div>
      <AddNote/>
      <div className="row my-3">
        <h2>Your note</h2>

        {notes.map((note) => {
          return <Noteitem note={note} />;
        })}
      </div>
    </div>
  );
};
export default Notes;
