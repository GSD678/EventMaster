import React from 'react'
import { Container,Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
const Header = () => {
  return (
    <header> 
  
      <Navbar bg = "primary" variant ="dark" expand= "lg" collapseOnSelect >
        <Container>
        <LinkContainer to= "/">
          <Navbar.Brand href='/'>EventMaster</Navbar.Brand>
         </LinkContainer>
          <Navbar.Toggle aria-controls= "basic-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse id= "basic-navbar-nav">
            <Nav className="ms-auto">
            <LinkContainer to= "/cart">
            <Nav.Link href="/cart"><i className='fas fa-shopping-cart'>
              </i> Cart</Nav.Link> 
            </LinkContainer>
            <LinkContainer to= "/login">
            <Nav.Link href="/login"><i className='fas fa-user'>
              </i> Sign in</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  
    </header>
  )
}

export default Header
