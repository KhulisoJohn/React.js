
import './App.css'

function App() {
let myName = "john doe";

  const handleClick = () => {
    console.log('Button clicked!')
    alert('Button clicked!');
  }

  return (
    <>
    <h1>{myName}</h1>
     <h1>Button Click</h1>
     <button onClick={handleClick}>Click Me</button>
     <button onClick={() =>{alert("arrow function")}}>click me</button>
     
    </>
  )
}

export default App
