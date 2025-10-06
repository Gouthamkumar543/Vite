import React, { useContext } from 'react'
import { Context } from '../../src/App'
import {Table , Button} from 'react-bootstrap'

const Cart = () => {

    const { cart,setCart } = useContext(Context)
    console.log(cart);

    return (
        <div>
            {
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.title}</td>
                                <td>
                                    <img src={item.image} alt={item.title} width="100" />
                                </td>
                                <td>
                                    <Button variant="danger" onClick={()=>{setCart(cart.filter (x => x.id !== item.id))}}>Remove</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            }
        </div>
    )
}

export default Cart