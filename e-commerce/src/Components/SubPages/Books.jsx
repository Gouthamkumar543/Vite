import React from 'react'
import { booksData } from '../Data/Data'
import { useNavigate } from 'react-router-dom'

const Books = () => {
    const fiveProduct = booksData.slice(0, 5)

    const Navigate = useNavigate()

    return (
        <>
            <h1>Books</h1>
            <div className='product'>
                {
                    fiveProduct.map((item) => {
                        return (
                            <div className='card'>
                                <img src={item.images} onClick={() => Navigate("/bookspage")} />
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

export default Books