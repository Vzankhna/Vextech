import React from 'react'
import { useState } from 'react'
const Demo = () => {
    

    const [s,setS]= useState(false)
    
  return (
   
<div>
      <button onClick={() =>setS(!s)}>click</button>  
{  
    s ? <div>div1</div>:
   <div className='div2'>div2</div>
   }

   </div>

  )
}

export default Demo
