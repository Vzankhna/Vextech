import React, { useContext } from 'react'
import './Category.scss'
import MyContext from '../../Common/Context/MYcontext'
const Categ = () => {

    const{data,handlenavigate} = useContext(MyContext)
  
  return (
    <div class="categories">
   { data.map((o)=>{
    return(
        <div class="categ">
        <img src={o.img} alt="" onClick={()=>handlenavigate(o.product_category_route)} />
        <div class="name">{o.product_category}</div>
    </div>
    )
   })
   }
 
</div>
  )
}

export default Categ
