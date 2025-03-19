import './App.css'

const  App = () => {
  return(
   <>
   <form className='form'>
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input type="text" id="item" />
    </div>
    <button className="btn">Add</button>
   </form>

   <h1 className="header">Todo List</h1>
   <div className="items">
    <label>
      <input type="checkbox" />
      Item 1
    </label>
    <button className="btn btn-danger">Delete</button>
   </div>
   <div className="items">
    <label>
      <input type="checkbox" />
      Item 2
    </label>
    <button className="btn btn-danger">Delete</button>
   </div>
   </>
  )
}

export default App;


