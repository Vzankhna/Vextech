import React from 'react'
import Typewriter from "typewriter-effect";
import './Typewriter.scss'
const Typewriteri = () => {
  return (
    <div className='type'>
      
<Typewriter
options={{
strings: ["Discover Your Next Favorite Thing.",
"Shop Smart Live Better."
],
autoStart: true,
loop: true,
}}
/>
    </div>
  )
}

export default Typewriteri
