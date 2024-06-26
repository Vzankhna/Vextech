import React, { useEffect, useState } from 'react'
import MyContext from './MYcontext'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Mycontextprovider = ({children}) => {
    const[open,setOpen] = useState(false)
    const[a,setA] =useState(false)
    const[count,setCount] =useState(false)
    const[alert,setAlert]=useState(false)
    const[message,setMessage]=useState('')
    const[load,setLoad]=useState(false)
    const[pass,setPass]=useState('')
    const[value,setValue]=useState('')

    const[items,setItems] =useState([])

    const handlehover = (img) =>{
      document.getElementById('change').src=img
    }


    const[data,setData] = useState([])
    const navigate = useNavigate()

    useEffect(() =>{
      axios.get('http://localhost:9000/category')
      .then(a => setData(a.data.data))

    })

    // useEffect(() =>{
    //   axios.get('http://localhost:9000/accordian')
    //   .then(item => setItems(item.items))
    // })

    const handlenavigate = (category) =>{
    navigate(`/category/${category}`)
    }

    const matchnavigate = (category,product) =>{
    navigate(`/category/${category}/${product}`)
    }

  return (
    <MyContext.Provider value={{value,setValue,items,setItems,handlehover,matchnavigate,handlenavigate,pass,setPass,data,load,setLoad,message,setMessage,alert,setAlert,count,setCount,open,setOpen,a,setA}}>
        {children}
    </MyContext.Provider>
  )
}

export default Mycontextprovider
