import React, { useEffect, useState } from 'react'
import "./App.css";
export default function App() {
  const [name, setname] = useState("my website")

  useEffect(() => {
    document.title=name;
    console.log("welcome")
  },[name])
 const submit=(e)=>{
    setname(e.target.value);
 }
  return (
   <>
      <h1>Title Changer</h1><br />
      <h2>Your title : {name}</h2>
       <div className="con">
     <input type="text" value={name} onChange={submit} placeholder="name" />
     <button onClick={()=>{setname("")}}>clear</button>
    </div>
   
   </>
  )
}
