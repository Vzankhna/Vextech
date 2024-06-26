import React, { useContext } from 'react'
import './Singleproduct.scss'
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import MyContext from '../../Common/Context/MYcontext'
import { useParams } from 'react-router-dom'
const Singleproduct = () => {
      const {data,handlehover} = useContext(MyContext)
      const{singleproduct,product} = useParams()

      
  return (
    <div className="singleproduct">
    {
      data
      .filter(p=>p.product_category_route===product)
      .map((p) =>{
        return(
          <>
          {
           p
            .product_container
            .filter(a=>a.product_route===singleproduct).map((a)=>{
              return(
                <>
                <div className="big-img">
                  <img src={a.img} alt="" id='change'/>
                </div>
                
                <div className="smallimg">
                {
                a.sideimg.map((d)=>{
                      return(
                      <img src={d.sideimg} 
                      id='image'
                      onMouseOver={() => handlehover(d.sideimg)} 
                      alt="" />
                      )
                  })
                }
                </div>
                <div className="content">
                  <div className="product-title">{a.name}</div>

                  <div className="product-price">
                    <span>{a.price}</span>
                    <span>{a.deleted_price}</span>
                  </div>
                  <p>{a.description}</p>
                  <p style={{fontSize:"30px", fontWeight:"bold"}}>Stock:</p>
                  <p>{a.stock}</p>
               
                  <div className="size">
                    <h4>Size:</h4>
                    {a.size.map((s)=>{
                      return(
                      <span>{s.size}</span>
                      )
                    })}
                    
                  </div>
                  <div class="btn">
                    <button>Buy now</button>
                    <button>Add to cart</button>
                  </div>
                  <div className="share">
                    <span><AiOutlineWhatsApp/></span>
                    <span><FaSquareFacebook/></span>
                    <span><FaInstagram/></span>
                    <span><IoIosShareAlt/></span>
                  </div>
                </div>
                </>
              )
              
            })
          }
          </>
        )
      })
    }
    </div>

  )
}
    


export default Singleproduct
