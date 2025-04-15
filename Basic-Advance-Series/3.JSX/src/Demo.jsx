import React from 'react'

const Demo = () => {

    let name = "Khuliso John";
    let myElement = React.createElement('h1', null, 'Hello World');
  return (
    <div>
        <div>{myElement}</div>
        <div>My name is {name}</div>
        <div>I am  {15 + 15} years old.</div>
    </div>
  )
}

export default Demo