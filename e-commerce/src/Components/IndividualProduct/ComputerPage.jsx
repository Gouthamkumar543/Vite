import React from 'react'
import { computerData } from '../Data/Data'
import { useNavigate } from 'react-router-dom'

const ComputerPage = () => {
    const Navigate = useNavigate()

    return (
        <div className='idn-prod'> {
            computerData.map((item) => {
                return (
                    <div className='ind-card'>
                        <h2>{item.title}</h2>
                        <img src={item.images} alt='Mobile' onClick={()=>Navigate(`/computeritem/${item.id}`)}/>
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

export default ComputerPage