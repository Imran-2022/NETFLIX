import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbarr = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Link className="link-default h2" to="/">NetFix | Clone</Link>
                        <Nav className="ms-auto">
                            <Link className="link-default h2 btn btn-primary text-white" to="sign-in">SignIn</Link>
                        </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navbarr;