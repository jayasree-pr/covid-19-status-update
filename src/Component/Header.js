import React,{Component} from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <Navbar bg="light" expand="lg">
  
    <Navbar.Brand href="/">Covid-19</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Link className="nav-link" to ="/india">India</Link>
        <Link className="nav-link" to ="/world">World</Link>
      
      </Nav>
    </Navbar.Collapse>
  
</Navbar>
        );
    }
}
export default Header;