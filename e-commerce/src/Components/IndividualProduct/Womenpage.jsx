import React from 'react'
import { womanData } from '../Data/Data'

const Womenpage = () => {
    return (
        <div className='idn-prod'> {
            womanData.map((item) => {
                return (
                    <div className='ind-card'>
                        <h2>{item.title}</h2>
                        <img src={item.images} alt='Mobile' />
                        <p><strong>Description:</strong>{item.description}</p>
                        <div>
                            <span><strong>Price:</strong> ₹{item.price}</span>
                            <span><strong>Discount:</strong> {item.discountPercentage}%</span>
                        </div>
                    </div>
                )
            })
        }</div>
    )
}

export default Womenpage