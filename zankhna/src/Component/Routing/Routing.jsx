import React from 'react'
import './Routing.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Nopage } from '../Nopage/Nopage'
import { Register } from '../Register/Register'
import { Login } from '../Login/Login'
import  Home  from '../Home/Home'
import { Cart } from '../Cart/Cart'
import { Order } from '../Order/Order'
import { Payment } from '../Payment/Payment'
import { Header } from '../Header/Header'
import { About } from '../About/About'
import Practice from '../Practice/Practice'
import Mycontextprovider from '../../Common/Context/Mycontextprovider'
import Prac from '../Practice/Prac'
// import Loader from '../../Common/Loader/Loader'
import { Orderconfirm } from '../Orderconfirm/Orderconfirm'
import Slider from '../Home/Slider/Slider'
import ScrollToTop from "react-scroll-to-top";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { Footer } from '../Footer/Footer'
import Cont from '../Formik/Contact/Cont'
import Log from '../Formik/Login/Log'
import Reg from '../Formik/Register/Reg'
import Check from '../Formik/Checkout/Check'
import Contact from '../Formik/Contact/Cont'
import Alert from '../../Common/Alert/Alert'
import Loading from '../../Common/Loading/Loading'
import Loader from '../../Common/Loader/Loader'
import Product from '../Product/Product'
import Category from '../Category/Category'
import Singleproduct from '../Singleproduct/Singleproduct'
import GoToTop from '../../Common/GoToTop'
import Accordian from '../Accordian/Accordian'
import Pdf from '../Pdf/Pdf'
import Map from '../Map/Map'

const Routing = () => {


  return (
    <div>
        <BrowserRouter>
        
        <Mycontextprovider>
          <Loader/>
          <Alert/>
          <GoToTop/>
          <Loading/>
        <ScrollToTop className='scroll' smooth component={<FaArrowAltCircleUp  size={34}/>} />
        <Header/>
        <Routes>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='*' element={<Nopage/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/practice' element={<Practice/>}/>
            <Route path='/prac' element={<Prac/>}/>
            <Route path='/order' element={<Order/>}/>
            <Route path='/orderconfirm' element={<Orderconfirm/>}/>
            <Route path='/payment' element={<Payment/>}/>
            <Route path='/category/:product' element={<Product/>}/>
            <Route path='/category' element={<Category/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/slider' element={<Slider/>}/>
            <Route path='/cont' element={<Cont/>}/>
            <Route path='/log' element={<Log/>}/>
            <Route path='reg' element={<Reg/>}/>
            <Route path='check' element={<Check/>}/>
            <Route path='/category/:product/:singleproduct' element={<Singleproduct/>}/>
            <Route path='/accordian' element={<Accordian/>}/>
            <Route path='/pdf' element={<Pdf/>}/>
            <Route path='/googlemap' element={<Map/>}/>
            
        </Routes>
        </Mycontextprovider>
        <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default Routing