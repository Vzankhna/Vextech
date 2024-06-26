import React, { useEffect, useState } from 'react'

const Prac = () => {

  const [count, setCount] = useState(0);

  useEffect(() =>{

    setTimeout(() => {
      setCount(count+1)
    },1000);

  })
  return (
    <div>
      {count &&
        count
      }
    </div>
  )
}

export default Prac
