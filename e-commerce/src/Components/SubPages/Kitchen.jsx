import React from 'react'
import { kitchenData } from '../Data/Data'

const Kitchen = () => {
    const fiveProduct = kitchenData.slice(0, 5)

    return (
        <>
            <h1>Kitchen</h1>
            <div className='product'>
                {
                    fiveProduct.map((item) => {
                        return (
                            <div className='card'>
                                <img src={item.images} />
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

export default Kitchen