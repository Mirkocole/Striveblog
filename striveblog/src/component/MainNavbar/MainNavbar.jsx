import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default function MainNavbar() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Link className='nav-item nav-link text-dark' to="/">React-Bootstrap</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='nav-item nav-link' to="/">Home</Link>
                            <Link className='nav-item nav-link' to="#link">Link</Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <Link className='dropdown-item' to="#action/3.1">Action</Link>
                                <Link className='dropdown-item' to="#action/3.2">
                                    Another action
                                </Link>
                                <Link className='dropdown-item' to="#action/3.3">Something</Link>
                                <NavDropdown.Divider />
                                <Link className='dropdown-item' to="#action/3.4">
                                    Separated link
                                </Link>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
