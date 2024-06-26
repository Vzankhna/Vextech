import React from 'react'
import { useState } from 'react'
const Color = () => {
  const[change,setChange] = useState(false) 
  return (
   
    <div>
          <button onClick={() =>setChange(!change)}>click</button>  
    {  
        change ? <div style={{backgroundColor:' '}}></div>:
       <div  style={{backgroundColor:'red'}}></div>
       }
    
       </div>
    
      )
}

export default Color
