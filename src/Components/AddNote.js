import React,{useContext, useState} from 'react'
import noteContext from '../context/notes/noteContext';


const AddNote = () => {
    const context = useContext(noteContext);
    const {addNote } = context;

    const [note, setNote] = useState({title: "", description :"", tag: ""})
    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        
    }

    // It happens first. whenever we start typing on any kind of input it triger a change and
    //And input which is being changed is on the target at that point this e.target.name will give the name of the target input
    // and e.target.value will give the letter, text which is written on the certain input
    const onChange = (e)=>{
       /**  setNote({...note, [e.target.name]: [e.target.value]})*/
        setNote({ ...note, [e.target.name]: e.target.value });

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
          <small id="emailHelp" className="form-text text-muted">
          
          </small>
          <div className="form-group my-3">
            <label htmlFor="exampleInputPassword1">Tag</label>
            <input
              type="text"
              name= "tag"
              className="form-control"
              id="tag"
              placeholder="Tag"
              onChange={onChange}
            />
          </div>
        
          <button disabled = {note.title.length < 3 || note.description.length < 3} type="submit" className="btn btn-primary" onClick={handleClick}>
            Submit
          </button>
        </form>
      </div>
  )
}

export default AddNote