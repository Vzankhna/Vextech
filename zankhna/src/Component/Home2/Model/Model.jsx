import React, { useState } from 'react'
import './Model.scss'
import { Head } from '../Head/Hea'


const Model = () => {
  const[a,setA] = useState(false)
  return (
    <>
    <div className="model">
        <div className="content">
            <p>This is Modal</p>
        </div>
        <div className="close">
          <p onClick={() => setA(!a)}>&times;</p>
        </div>
      
    </div>
    {a &&
     <Head/>
    }
    </>
  )
}

export default Model
