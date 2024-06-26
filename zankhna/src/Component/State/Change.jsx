import './Change.scss'
import React from 'react'
import { useState } from 'react'
import i from '../../assets/ima.jpg'
import ima from '../../assets/images.jpg'
const Change = () => {

    const [a,setA] = useState(i)
    
  return (
    <div className='ch'>
       <img src={a} onMouseEnter={() =>setA(ima)} alt="" />
    </div>
  )
}

export default Change
