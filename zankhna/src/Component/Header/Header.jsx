import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'
import './Header.scss'
import { HiHome } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
// import { useContext } from 'react';
// import MyContext from '../../Common/Context/MYcontext';
const Header = () => {
    const navigate=useNavigate()
    const location = useLocation()

    const loc = ['/contact']
 if(loc.includes(location.pathname)){
    return (
        <div className="head">
            <h1 onClick={() =>navigate('/')}>Contact Us</h1>
       </div>
    )
 }
    return(
<div class="header">
    <div class="logo">
     <img src= {logo} height={"60px"} width={"140px"} alt="" onClick={() =>navigate('/')} />
    </div>
    <div class="center">
        
            <li onClick={() =>navigate('/')}><span><HiHome /></span><br />Home</li>
            <li onClick={() =>navigate('/About')}><span><FaRegUserCircle /><br /></span>About</li>
            <li onClick={() =>navigate('/contact')}><span><FaPhoneAlt /></span><br />Contact</li>
            <li onClick={() =>navigate('/service')}><span><GrServices /></span><br />Service</li>
    
    </div>
    <div class="right">
        {/* <li onClick={() => setOpen(!open)}><i class="fa-solid fa-list"></i></li>
        <li onClick={() => setA(!a)}><i class="fa-solid fa-cart-shopping"></i></li> */}
        <li onClick={() => navigate ('/Order')}><i class="fa-solid fa-list"></i></li>
        <li onClick={() => navigate('/Cart')}><i class="fa-solid fa-cart-shopping"></i></li>
        <li onClick={() =>navigate('/reg')}><i class="fa-solid fa-user"></i></li>
    </div>
</div>
)
}

export {Header};