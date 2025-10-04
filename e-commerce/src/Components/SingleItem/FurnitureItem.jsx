import React from 'react'
import { useParams } from 'react-router-dom'
import { furnitureData } from '../Data/Data'

const FurnitureItem = () => {
    const { id } = useParams()
    // console.log(id);

    const prod = furnitureData.find((x) => x.id == Number(id))
    console.log(prod);

    return (
        <div className="s-card">
            <div className="img-card">
                <img src={prod.images} />
            </div>
            <div className="info-card">
                <h2>{prod.title}</h2>
                <p>{prod.description}</p>
                <span><strong>Price:</strong> ₹{prod.price}</span>
                <span><strong>Discount:</strong> {prod.discountPercentage}%</span>
            </div>
        </div>
    )
}

export default FurnitureItem