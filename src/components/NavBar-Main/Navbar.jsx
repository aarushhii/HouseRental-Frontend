import React from 'react';
import Logo from "../../Assets/Logo.png";
import Profile from "../../Assets/Profile.png";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './NavBar.css'; // Import the CSS file for NavBar styles

const NavBar = () => {
    return (
        <Navbar expand="lg" className="slim-navbar">
            <Navbar.Brand href="/dashboard">
                <img
                    src={Logo}
                    width="150"
                    height="0"
                    className="d-inline-block align-top"
                    alt="Logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                <Nav.Link href="/property">Property</Nav.Link>
                    <Nav.Link href="/complaints">Complaint</Nav.Link>
                    <NavDropdown 
                    title={<img src={Profile} alt="Profile" width="40" />} 
                    id="basic-nav-dropdown" 
                    alignRight 
                    className="profile-dropdown">
                        <NavDropdown.Item href="/addProperty">Add Property</NavDropdown.Item>
                        <NavDropdown.Item href="/raiseComplaint">Raise Complaint</NavDropdown.Item>
                        <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                        <NavDropdown.Item href="/reset-password">Reset Password</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
