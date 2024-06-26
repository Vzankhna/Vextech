import { useState } from 'react';
import './Hea.scss'
import Drawer from '../Drawer/Drawer'
import Model from '../Model/Model';
const Head = () => {
    const [open,setOpen] = useState(false)
    const [close,setClose] = useState(false)
    return(

     <>
<div class="head">
    <div class="logo">
     <h1>Logo</h1>
    </div>
    <div class="center">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Service</li>
    <h1>Contact</h1>
    </div>
    <div class="right">
        <li onClick={() => setOpen(!open)}><i class="fa-solid fa-bars"></i></li>
        <li><i class="fa-solid fa-cart-shopping"></i></li>
        <li onClick={() => setClose(!close)}><i class="fa-solid fa-user"></i></li>
    </div>
</div>

{open &&
<Drawer/>
}
{
    close &&
    <Model/>
}
</>
)
}

export {Head};