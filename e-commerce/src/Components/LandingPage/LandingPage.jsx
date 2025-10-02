import React from 'react'

const LandingPage = () => {
  return (
    <div className='landingpage'>
        <div className="left">
            <h2>G-Mart</h2>
        </div>
        <div className="center">
            <ul>
                <li>Men</li>
                <li>Women</li>
                <li>Watch</li>
                <li>Mobile</li>
                <li>Computer</li>
                <li>Ac</li>
                <li>Books</li>
                <li>TV</li>
                <li>Speakers</li>
                <li>Kitechen</li>
                <li>Furniture</li>
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

export default LandingPage