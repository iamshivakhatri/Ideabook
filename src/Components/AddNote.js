import React,{useContext, useState} from 'react'
import noteContext from '../context/notes/noteContext';


const AddNote = () => {
    const context = useContext(noteContext);
    const {addNote } = context;

    const [note, setNote] = useState({title: "", description :"", tag: ""})
    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag = "default");
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: [e.target.value]})

    }

  return (
    <div className="container my-3">
        <h2>Add a Note</h2>
        <form>
          <div className="form-group my-3">
            <label htmlFor="exampleInputEmail1">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name='title'
              aria-describedby="emailHelp"
              placeholder="Enter the title"
              onChange={onChange}
            />
            <small id="emailHelp" className="form-text text-muted">
          
            </small>
          </div>
          <div className="form-group my-3">
            <label htmlFor="exampleInputPassword1">Descriptions</label>
            <input
              type="text"
              name='description'
              className="form-control"
              id="description"
              placeholder="Description"
              onChange={onChange}
            />
          </div>
        
          <button type="submit" className="btn btn-primary" onClick={handleClick}>
            Submit
          </button>
        </form>
      </div>
  )
}

export default AddNote