import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
        <div className="bg-white shadow">
            <div className="container-fluid">
                <Navbar expand="md">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link className="link" href="/">Home</Nav.Link>
                            <Nav.Link className="link" href="/doctor/about">About</Nav.Link>
                            <Nav.Link className="link" href="/doctor/appointment/list">Appointment List</Nav.Link>
                            <Nav.Link className="link" href="/doctor/dashboard">Dashboard</Nav.Link>
                            <Nav.Link className="link" href="/doctor/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;