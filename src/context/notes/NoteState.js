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
          "auth-token": localStorage.getItem('token')
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
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title: noteTitle, description: noteDescription, tag: noteTag }),
    });
    
    const note = await response.json();
    console.log("Adding a new note");
    setNotes(notes.concat(note));
    
    //localhost:5000/api/notes/addnote
    
    


   

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
          "auth-token": localStorage.getItem('token')
        }
        
      });
      const json = await response.json();
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
     // Convert title to string
     const noteTitle = Array.isArray(title) ? title[0] : title;
  
     // Convert description to string
     const noteDescription = Array.isArray(description) ? description[0] : description;
   
     // Convert tag to string
     const noteTag = Array.isArray(tag) ? tag[0] : tag;

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title: noteTitle, description: noteDescription, tag: noteTag }),
    });
    const json = response.json();
    console.log(json);

    // Logic to edit in client
    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      let element = newNotes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
        break;
      }
      
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
