import React, { useState } from 'react'
import "./Form.css"

export default function Form() {
  const [first, setFirst] = useState("nothing")
  const [edit, setEdit] = useState(false)


  function handleEdit(e) {
    e.preventDefault();
    setEdit(true)
    console.log(e)
    console.log(e.target.parentElement.children[0].value)
    if (e.target.className === "firstName") {
      setFirst(e.target.parentElement.children[0].value)
      setEdit(false)
    }
  }

  return (
    <div>
      <div>CV Generator</div>
      <form className="form">
        <div>
          {edit ? <input type="text" value={first} /> : <div>{first}</div>}
          <button className="firstName" onClick={handleEdit}>Edit</button>
        </div>
        <div>          
          <input type="text" value="Last Name" />
          <button className="lastName" onClick={handleEdit}>Edit</button>
        </div>
        <div>
          <input className="email" type="text" value="Email Address" />
          <button onClick={handleEdit}>Edit</button>
        </div>
        <div>
          <input className="phone" type="text" value="Phone Number" />
          <button onClick={handleEdit}>Edit</button>
        </div>
      </form>
    </div>
  )
}
