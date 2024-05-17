import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <Navbar>
        <Container>
          <Navbar.Brand className='lo' href="#home"><i class="fa-brands fa-web-awesome text-warning pe-2"></i>JISHNU R</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link className='lo' href="#home">HOME</Nav.Link>
            <Nav.Link className='lo' href="#about">ABOUT</Nav.Link>
            <Nav.Link className='lo' href="#services">SERVICES</Nav.Link>
            <Nav.Link className='lo' href="#skills">SKILLS</Nav.Link>
            <Nav.Link className='lo' href="#portfolio">PORTFOLIO</Nav.Link>
            <Nav.Link className='lo' href="#contacts">CONTACTS</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header