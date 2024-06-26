import React from 'react'
import { useState } from 'react'
const Write = () => {
    const[ab,setAb] =useState('')
  return (
    <div>
      <input type="text" placeholder='Write' value={ab} onChange={a =>setAb(a.target.value)}
      style={{margin:'0 10px', width:'200px'}} />
      <p style={{margin:'0 10px'}}>{ab}</p>
    </div>
  )
}

export default Write
