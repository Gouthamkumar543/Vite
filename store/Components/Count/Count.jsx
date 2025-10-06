import React,{useContext} from 'react'
import {Context} from "../../src/App"

const Count = () => {

    const {count} =useContext(Context)

  return (
    <div>
        {count}
    </div>
  )
}

export default Count