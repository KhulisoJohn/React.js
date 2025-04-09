//import MyFunction from './Components/MyFunction'
import './App.css'
import MyClass from './Components/MyClass'
import MyFunction from './Components/MyFunction'


const MyFunc = () =>{
  return (
    <>
    <h2>Hello my first function</h2>
    <p>This is my first react component</p>
    </>
  )
 }

function App() {
  
  return (
    <>
    <MyFunc />  
    <MyFunction />
    <MyClass />
    </>
  )
}

export default App
