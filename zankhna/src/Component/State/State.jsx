import './State.scss'
import './Modal.scss'
import React from 'react'
import { useState } from 'react'

const State = () => {

    const[open,setOpen] = useState (false)
    const show = () => setOpen(!open)
  return (
    <div className='min'>
      <button onClick={show}>Click!</button>

      {
        open &&
        <div className="modal">
                This is Modal
        </div>
      }
    </div>
  )
}

export default State
