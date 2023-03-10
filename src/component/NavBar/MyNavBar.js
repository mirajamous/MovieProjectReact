import {  Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Contact';
import "./nav.css"
import Card from './Pages/Card';
function MyNavBar() {
   
    return (
        <BrowserRouter>

            <div>
                <Navbar  expand="lg"  className="bigNav">
                    <Container fluid>
                        <Navbar.Brand as={Link} to={"/"} className="logo">OurMovie</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll" className='navCol'>
                            <Nav
                                className="me-auto my-2 my-lg-0 smallNav"
                                style={{ maxHeight: '100px'  }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to={"/"} className="myNavbaritem">Home</Nav.Link>
                                <Nav.Link as={Link} to={"/About"} className="myNavbaritem">About</Nav.Link>
                                <Nav.Link as={Link} to={"/Contact"} className="myNavbaritem">Contact</Nav.Link>
                            </Nav>
                            {/* <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form> */}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Contact" element={<Login />} />

                </Routes>
            </div> 
            
        </BrowserRouter>
    )
   

}
export default MyNavBar;