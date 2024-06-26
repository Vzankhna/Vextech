import React from 'react'
import { Banner } from '../Banner/Banner'
import Autoincrement from '../Autoincrement/Autoincrement'
import Typewriter from './Typewriter/Typewriter'
import Mycarousel from './Slider/Slider'
import Category from '../Category/Category'

// import Category from '../Category/Category'
// import { Order } from '../Order/Order'
// import { Orderconfirm } from '../Orderconfirm/Orderconfirm'
// import { Payment } from '../Payment/Payment'

const Home = () => {
  return (
    <div>
      <Mycarousel/>
      <Banner/>    
      <Category/>
      <Typewriter/>
      {/* <Order/> */}
      {/* <Orderconfirm/> */}
      {/* <Payment/> */}
      <Autoincrement/>
    </div>
  )
}

export default Home
