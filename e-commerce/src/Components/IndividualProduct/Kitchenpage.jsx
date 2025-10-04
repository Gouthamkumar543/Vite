import React from 'react'
import { kitchenData } from '../Data/Data'
import { useNavigate } from 'react-router-dom'

const Kitchenpage = () => {
    const Navigate = useNavigate()

    return (
        <div className='idn-prod'> {
            kitchenData.map((item) => {
                return (
                    <div className='ind-card'>
                        <h2>{item.title}</h2>
                        <img src={item.images} alt='Mobile' onClick={() => Navigate(`/kitchenitem/${item.id}`)} />
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

export default Kitchenpage