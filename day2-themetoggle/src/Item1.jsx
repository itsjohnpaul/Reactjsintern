import React, { useContext } from 'react'
import { Context } from './App';

function Item1() {
  const use=useContext(Context);
  return (
    <div style={{
         background: use.background ,
         color:use.color,
         width:"600px",
         height:"500px",
         display:"flex",
         alignItems:"center",
         justifyContent:"center",
        flexDirection:"column"

      
      }}>
        <h1>Welcome {use.name} ! </h1>
        <h2>This is page 1 !</h2>
    </div>
  )
}

export default Item1;