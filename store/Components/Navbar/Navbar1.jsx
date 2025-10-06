import React from 'react'
import {Navbar, Nav , Container, Button} from "react-bootstrap"
import { useNavigate } from 'react-router-dom'

const Navbar1 = () => {

    const navigate = useNavigate()

    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/recipies">Recipies</Nav.Link>
                        <Button onClick={()=>navigate("/cart")}>Cart</Button>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navbar1