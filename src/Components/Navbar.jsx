import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const WebNavbar = () => {
    return (
        <>
            <Navbar className="bg-body-tertiary"
                style={{ position: 'fixed', width: '100%', zIndex: '100', boxShadow: '0 0 10px #a3a3a3' }}>
                <Container>
                    <Navbar.Brand href="#home" style={{ fontSize: '30px', fontWeight: 'bold' }}>Banao Tech</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">Israr Khan</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default WebNavbar;