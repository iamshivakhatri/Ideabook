import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [ ];

  const [notes, setNotes] = useState(notesInitial);


  //Get all note
  const getNotes = async () => {
    //API
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhZWQ0NTU2NzA5OTFiNmQ1YjNkNTI5In0sImlhdCI6MTY4OTUyMzc1MX0.AXlkf88gfCBdpBSHQ-gqjc6LOBUwCW2roGzRpDZaH1Y",
        }
      });
    


    //Logic to add in the client
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };



  const addNote = async (title, description, tag) => {
    // Convert title to string
    const noteTitle = Array.isArray(title) ? title[0] : title;
  
    // Convert description to string
    const noteDescription = Array.isArray(description) ? description[0] : description;
  
    // Convert tag to string
    const noteTag = Array.isArray(tag) ? tag[0] : tag;
  
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        'Accept':'application/json',
        "Content-Type": "application/json",
        "auth-token":  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhZWQ0NTU2NzA5OTFiNmQ1YjNkNTI5In0sImlhdCI6MTY4OTUyMzc1MX0.AXlkf88gfCBdpBSHQ-gqjc6LOBUwCW2roGzRpDZaH1Y",

      },
      body: JSON.stringify({ title: noteTitle, description: noteDescription, tag: noteTag }),
    });
    
    //localhost:5000/api/notes/addnote
    
    


    //Logic to add in the client

    console.log("Adding a new note");
    const note = {
      _id: "6444b2eb0d2453339184878498c8",
      user: "64aed455670991b6d5b3d529",
      title: title,
      description: description,
      tag: tag,
      date: "2023-07-15T18:53:01.386Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };



  /** when we click the button then it trigers this function. it then uses filter method on original list of notes
   * it filter by only allowing the item which id aren't equal to the original list.
   */
  //Delete a note
  const deleteNote = async(id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhZWQ0NTU2NzA5OTFiNmQ1YjNkNTI5In0sImlhdCI6MTY4OTUyMzc1MX0.AXlkf88gfCBdpBSHQ-gqjc6LOBUwCW2roGzRpDZaH1Y",
        }
        
      });
      const json = response.json();
      console.log(json);



    //Logic to delete
    console.log("Deleting the node with id", id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };




  //Update a note
  const editNote = async (id, title, description, tag) => {
    //API
    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhZWQ0NTU2NzA5OTFiNmQ1YjNkNTI5In0sImlhdCI6MTY4OTUyMzc1MX0.AXlkf88gfCBdpBSHQ-gqjc6LOBUwCW2roGzRpDZaH1Y",
      },
      body: JSON.stringify({title,description,tag})
    });
    const json = response.json();

    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
