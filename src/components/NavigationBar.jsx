import React from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';


export default () => {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/" className="navbar-brand">Authentication</Link>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem eventKey={1} href="/signup">
                    Sign up
                </NavItem>
            </Nav>
        </Navbar>
    );
}

