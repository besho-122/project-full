import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Navbar.css';
import { Link } from "react-router-dom";
function CustomNavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" className='nav1'>
            <Container>
                <Navbar.Brand href="#home" className='BeshoLetsho'>BESHOLETSHO</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features"></Nav.Link>
                        <Nav.Link href="#pricing"></Nav.Link>
                        <NavDropdown title="" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Link className='Link1' to="/login">
                            <button type="button" class="btn">
                                <strong>LOGIN</strong>
                                <div id="container-stars">
                                    <div id="stars"></div>
                                </div>

                                <div id="glow">
                                    <div class="circle"></div>
                                    <div class="circle"></div>
                                </div>
                            </button>
                        </Link>
                        <Link className='Link1' to="register">
                           <Button className='button1'>Sign up</Button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavBar;