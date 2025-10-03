import React from 'react'
import { menData } from '../Data/Data'
import { useNavigate } from 'react-router-dom'

const Men = () => {

    const fiveProduct = menData.slice(0, 5)
    // console.log(fiveProduct);

    const Navigate = useNavigate()

    return (
        <>
            <h1>Mens Fashion</h1>
            <div className='product'>
                {
                    fiveProduct.map((item) => {
                        return (
                            <div className='card'>
                                <h2>{item.title}</h2>
                                <img src={item.images} alt='Mobile' onClick={() => Navigate("/menpage")} />
                                <p><strong>Description:</strong>{item.description}</p>
                                <div>
                                    <span><strong>Price:</strong> ₹{item.price}</span>
                                    <span><strong>Discount:</strong> {item.discountPercentage}%</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Men