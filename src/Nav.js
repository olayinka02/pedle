import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { FaMobileAlt,FaDesktop,FaBook,FaSurprise,FaShoppingBasket,FaBasketballBall } from "react-icons/fa";
import logo1 from './image/logo1.svg';


class nav extends Component {
  render() {
    return (
      <div>
      <Navbar className="nav" expand="lg" style={{position:'relative',width:100+'%',}}>
      <Navbar.Brand href="#home">
      <img
        src={logo1}
        width="200"
        height="35"
        className="d-inline-block align-top"
        alt="logo"
      />
    </Navbar.Brand>
 
  <Navbar.Toggle  style={{borderRadius:13,backgroundColor:'orange',boxShadow:'2px white',color:'white',}} aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto" style={{marginLeft:20,}}>
      <Nav.Link style={{marginLeft:200,}} href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <Nav.Link href="#link">About Us</Nav.Link>
      <Nav.Link href="#link">Services</Nav.Link>
      <NavDropdown title="Category.." id="basic-nav-dropdown" >
        <NavDropdown.Item href="#action/3.1"><FaMobileAlt style={{color:'orange',}} /> Mobile</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2"><FaDesktop  style={{color:'orange',}}/> Computer & Accessories</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3"><FaBook  style={{color:'orange',}}/> Books</NavDropdown.Item>
        
        <NavDropdown  style={{color:'orange',}} title="Fashion" id="basic-nav-dropdown">

       
        <NavDropdown  style={{color:'orange',}} title="  Ladies" id="basic-nav-dropdown"> 
        <NavDropdown.Item href="#action/3.3"> Skirt</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3"> Tops</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3"> Shoes & footwears</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3"> Bags</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3"> Underwears</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3"> Corporate wears</NavDropdown.Item>
         </NavDropdown>

         <NavDropdown  style={{color:'orange',}} title="  Guys" id="basic-nav-dropdown">
         <NavDropdown.Item href="#action/3.3"> Trouser</NavDropdown.Item>
         <NavDropdown.Item href="#action/3.3"> Tops</NavDropdown.Item>
         <NavDropdown.Item href="#action/3.3"> Footwear and shoes</NavDropdown.Item>
         <NavDropdown.Item href="#action/3.3"> Underwears</NavDropdown.Item>
         <NavDropdown.Item href="#action/3.3"> Corporate wears</NavDropdown.Item>
         <NavDropdown.Item href="#action/3.3"> Casual wears</NavDropdown.Item> 
         
         </NavDropdown>
        </NavDropdown>
        <NavDropdown.Item href="#action/3.3"><FaSurprise  style={{color:'orange',}}/> Health & beauty</NavDropdown.Item> 
        <NavDropdown.Item href="#action/3.3"><FaShoppingBasket  style={{color:'orange',}}/> Foodstuffs</NavDropdown.Item> 
        <NavDropdown.Item href="#action/3.3"><FaBasketballBall  style={{color:'orange',}}/> Sport Kit</NavDropdown.Item> 
         
        <NavDropdown  style={{color:'orange',}} title=" Services" id="basic-nav-dropdown">
         <NavDropdown.Item href="#action/3.3"> Tutorial</NavDropdown.Item>
         <NavDropdown.Item href="#action/3.3"> Baking</NavDropdown.Item>
         <NavDropdown.Item href="#action/3.3"> Hair stylist</NavDropdown.Item>
         <NavDropdown.Item href="#action/3.3"> Underwears</NavDropdown.Item>
         <NavDropdown.Item href="#action/3.3"> Tailoring</NavDropdown.Item>
         <NavDropdown.Item href="#action/3.3"> Make up</NavDropdown.Item> 
         </NavDropdown>
       
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl  style={{borderRadius:13,marginLeft:9,}} type="text" placeholder="Search for Campus" className="mr-sm-2" />
      <Button variant="outline-success" style={{borderRadius:13,backgroundColor:'orange',boxShadow:'2px white',color:'white',}}>Search</Button>
      <Button variant="outline-success" style={{borderRadius:13,backgroundColor:'black',marginLeft:5,boxShadow:'2px white',color:'white',}}>Sell</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>


         
            </div>    
        
      
    );
  }
}

export default nav;
 


