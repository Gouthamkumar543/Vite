import React, { useContext } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Context } from '../../src/App'

const Recipies = () => {

    const { data,cart,setCart } = useContext(Context)

    const addToCart =(item)=>{
        setCart([...cart,item])
        alert("done")
    }

    // console.log(cart);
    

    return (
        <div className='carditem'>
            {
                data.map((x) => {
                    return (
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={x.image} />
                                <Card.Body>
                                    <Card.Title>{x.Title}</Card.Title>
                                    <Card.Text>{x.cuisine}</Card.Text>
                                    <Button variant="primary" onClick={()=>addToCart(x)}>Add to cart</Button>
                                </Card.Body>
                            </Card>
                    )
                })
            }
        </div>
    )
}

export default Recipies