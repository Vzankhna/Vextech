import React from 'react'
import './Autoincrement.scss'
import CountUp from 'react-countup'
import { FaUserGraduate } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const Autoincrement = () => {
  return (
<div className='increment'>
  
  <div className='in'>
  <FaUserGraduate />
  <div className='count'>
  <CountUp
    start={0}
    end={100}
    duration={1.05}
    separator=" "
    decimals={0}
    decimal="."
    suffix='+'
  
  />
  <h2>Placement Given</h2>
</div>
</div>

<div className='in'>
<FaHandshake />
<div className='count'>
<CountUp
start={0}
end={50}
suffix='+'
duration={1.05}
separator=" "
decimals={0}
decimal="."

/>
<h2>Companies Tieup</h2>
</div>
</div>

<div className='in'>
<AiOutlineFundProjectionScreen />
<div className='count'>
<CountUp
start={0}
end={60}
duration={1.05}
separator=" "
decimals={0}
decimal="."
suffix='+'

/>

<h2>projects Completed</h2>
</div>
</div>

</div>
)
}


export default Autoincrement
