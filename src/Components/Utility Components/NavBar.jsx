import React from 'react'
import { Navbar, Container, FormControl, Nav } from 'react-bootstrap'


const NavBar = () => {
    return (
        <div>
            <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
                <Container className='d-flex align-items-center'>
                    <Navbar.Brand>
                        <a href='/' className='text-light text-decoration-none'>
                            <h2>Donit Store</h2>
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <FormControl
                            type="search"
                            placeholder="Search..."
                            className="me-2 w-75 text-center"
                            aria-label="Search"
                        />
                        <Nav className="me-auto">
                            <Nav.Link href='/login'
                                className="nav-text d-flex mt-3 justify-content-center align-items-center">
                                <i class="fa-solid fa-user h-100 mx-2 mt-2 text-light"></i>
                                <p style={{ color: "white" }}>Login</p>
                            </Nav.Link>
                            <Nav.Link href='/cart'
                                className="nav-text d-flex mt-3 justify-content-center align-items-center"
                                style={{ color: "white" }}>
                                <i class="fa-solid fa-cart-shopping h-100 mx-2 mt-2"></i>
                                <p style={{ color: "white" }}>My Order</p>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
