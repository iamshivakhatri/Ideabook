import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "64b2d5c462f3148756b4df35",
          "user": "64aed455670991b6d5b3d529",
          "title": "apple",
          "description": "buy an apple",
          "tag": "personal",
          "date": "2023-07-15T17:22:12.705Z",
          "__v": 0
        },
        {
          "_id": "64b2d5c662f3148756b4df37",
          "user": "64aed455670991b6d5b3d529",
          "title": "apple",
          "description": "buy an apple",
          "tag": "personal",
          "date": "2023-07-15T17:22:14.948Z",
          "__v": 0
        },
        {
          "_id": "64b2eb0d24539184878498c8",
          "user": "64aed455670991b6d5b3d529",
          "title": "apple",
          "description": "buy an apple",
          "tag": "personal",
          "date": "2023-07-15T18:53:01.386Z",
          "__v": 0
        },
      ]

      const [notes, setNotes] = useState(notesInitial);

      //Add a note
      const addNote = (title, description, tag = "default")=>{
        //API
       console.log("Adding a new note"); 
       const note =  {
            "_id": "64b2eb0d24539184878498c8",
            "user": "64aed455670991b6d5b3d529",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-07-15T18:53:01.386Z",
            "__v": 0
          }
        setNotes(notes.concat(note)); 

      }

      //Delete a note
      const deleteNote = ()=>{
        
      }
      //Update a note
      const editNote = ()=>{
        
      }
  
    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;