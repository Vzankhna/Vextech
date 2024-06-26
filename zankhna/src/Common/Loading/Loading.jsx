import React, { useContext} from 'react'
import './Loading.scss'
import MyContext from '../Context/MYcontext'

const Loading = () => {
    const{load} = useContext(MyContext)

  
  return (
<>
    {
        load &&
    <div class="container-box">
    <div class="box">
        <div class="front"></div>
        <div class="back"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="top"></div>
        <div class="bottom"></div>
    </div>
</div>

    }
    </>
  )
}

export default Loading
