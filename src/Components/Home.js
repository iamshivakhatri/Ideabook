
import Notes from "./Notes";

export const Home = () => {
  
  return (
    <>
      <div className="container my-3">
        <h2>Add a Note</h2>
        <form>
          <div className="form-group my-3">
            <label htmlFor="exampleInputEmail1">Title</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter the title"
            />
            <small id="emailHelp" className="form-text text-muted">
          
            </small>
          </div>
          <div className="form-group my-3">
            <label htmlFor="exampleInputPassword1">Descriptions</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Description"
            />
          </div>
        
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      <Notes/>
    </>
  );
};

export default Home;
