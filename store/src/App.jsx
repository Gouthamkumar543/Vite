import React, { createContext, useEffect, useState } from 'react'
import axios from "axios"
import Count from "../Components/Count/Count"
import Increase from '../Components/Increase/Increase'
import Decrease from '../Components/Decrease/Decrease'
import { Route, Routes } from "react-router-dom"
import Recipies from '../Components/Recipies/Recipies'
import "./App.css"
import Cart from '../Components/Cart/Cart'
import Navbar1 from '../Components/Navbar/Navbar1'

export const Context = createContext()
// console.log(Context);

const App = () => {

  const [data, setData] = useState([])
  const [count, setCount] = useState(0)
  const [cart,setCart] = useState([])

  useEffect(() => {
    axios.get("https://dummyjson.com/recipes")
      .then(res => {
        // console.log(res.data.recipes)
        setData(res.data.recipes)
      })
      .catch(err => console.log(err))
  }, [])

  // console.log(data);

  return (
    <div>
      <Context.Provider value={{ count, setCount, data,cart,setCart }}>
        <Navbar1 />
        <Routes>
          <Route path='/recipies' element = {<Recipies />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
        <Decrease />
        <Count />
        <Increase />
      </Context.Provider>
    </div>
  )
}

export default App