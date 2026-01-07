import { useContext } from 'react';
import { Context } from './App';
function Item2() {
  const use = useContext(Context);

  return (
    <div>
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
        <h2>This is page 2 !</h2>     
        
   </div>

    </div>
  )
}

export default Item2;