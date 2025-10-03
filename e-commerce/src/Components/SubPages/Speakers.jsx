import React from 'react'
import { speakerData } from '../Data/Data'
import { useNavigate } from 'react-router-dom'

const Speakers = () => {
    const fiveProduct = speakerData.slice(0, 5)

    const Navigate = useNavigate()

    return (
        <>
            <h1>Speakers</h1>
            <div className='product'>
                {
                    fiveProduct.map((item) => {
                        return (
                            <div className='card'>
                                <img src={item.images} onClick={() => Navigate("/speakerspage")} />
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

export default Speakers