import React, { useContext} from 'react'
import './Practice.scss'
import MyContext from '../../Common/Context/MYcontext'
const Practice = () => {
 const {open} = useContext(MyContext)
 const {a} = useContext(MyContext)
  return (
    <>
    <div className="p">
  {open &&  <div className="square">
        <div className="circle"></div>
    </div>}
    {a && <div className="c1">
        <div className="s1"></div>
    </div>}
    </div>
    </>
  )
}

export default Practice
