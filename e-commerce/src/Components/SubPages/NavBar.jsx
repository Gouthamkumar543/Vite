import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {

    const Navigate = useNavigate()

  return (
    <div className='landingpage'>
        <div className="left">
            <h2 onClick={()=>Navigate("/")}>G-Mart</h2>
        </div>
        <div className="center">
            <ul>
                <li onClick={()=>Navigate("/menpage")}>Men</li>
                <li onClick={()=>Navigate("/womenpage")}>Women</li>
                <li onClick={()=>Navigate("/watchpage")}>Watch</li>
                <li onClick={()=>Navigate("/computerpage")}>Computer</li>
                <li onClick={()=>Navigate("/acpage")}>Ac</li>
                <li onClick={()=>Navigate("/bookspage")}>Books</li>
                <li onClick={()=>Navigate("/speakerpage")}>Speakers</li>
                <li onClick={()=>Navigate("/kitchenpage")}>Kitechen</li>
                <li onClick={()=>Navigate("/furniturepage")}>Furniture</li>
            </ul>
            <input type="text" placeholder='Search here'  className='search'/>
        </div>
        <div className="right">
            <div>SignIn</div>
            <div>Cart</div>
        </div>
    </div>
  )
}

export default NavBar