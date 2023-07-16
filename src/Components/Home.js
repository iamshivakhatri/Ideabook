
import Notes from "./Notes";

export const Home = () => {
  
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
              placeholder="Enter the title"
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
              placeholder="Description"
            />
          </div>
        
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      <Notes/>
    </>
  );
};

export default Home;
