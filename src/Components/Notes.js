import React, { useContext, useEffect, useRef , useState} from "react";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
import noteContext from "../context/notes/noteContext";

export const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes } = context;

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  const [note, setNote] = useState({etitle: "", edescription :"", etag: ""})
  const updateNote = (currentNote) => {
    ref.current.click();
    console.log("edit button is clicked");
    setNote({etitle:currentNote.title, edescription: currentNote.description, etag: currentNote.tag});
  };
  const handleClick = (e)=>{
    e.preventDefault();
}
  const onChange = (e)=>{
    setNote({...note, [e.target.name]: [e.target.value]})

}


  const ref = useRef(null);

  return (
    <div>
      <AddNote />

      <button
        
        type="button"
        ref={ref}
        className="btn btn-primary d-none"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              /**Form begins here */
              <form>
                <div className="form-group my-3">
                  <label htmlFor="exampleInputEmail1">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    aria-describedby="emailHelp"
                    placeholder="Enter the title"
                    onChange={onChange}
                    value={note.etitle}
                  />
                  <small
                    id="emailHelp"
                    className="form-text text-muted"
                  ></small>
                </div>
                <div className="form-group my-3">
                  <label htmlFor="exampleInputPassword1">Descriptions</label>
                  <input
                    type="text"
                    name="edescription"
                    className="form-control"
                    id="edescription"
                    placeholder="edescription"
                    onChange={onChange}
                    value = {note.edescription}
                  />
                </div>
                <small id="emailHelp" className="form-text text-muted"></small>
                <div className="form-group my-3">
                  <label htmlFor="exampleInputPassword1">Tag</label>
                  <input
                    type="text"
                    name="etag"
                    className="form-control"
                    id="etag"
                    placeholder="Tag"
                    onChange={onChange}
                    value = {note.etag}
                  />
                </div>
              </form>
              /**Form ends here */

            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleClick}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h2>Your note</h2>

        {notes.map((note) => {
          return (
            <Noteitem key={note._id} updateNote={updateNote} note={note} />
          );
        })}
      </div>
    </div>
  );
};
export default Notes;
