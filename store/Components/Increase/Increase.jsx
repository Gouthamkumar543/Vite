import React, { useContext } from 'react'
import { Context } from '../../src/App'

const Increase = () => {

    const {count,setCount} = useContext(Context)

  return (
    <div>
        <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}

export default Increase