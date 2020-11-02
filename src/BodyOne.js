import React, { Component } from 'react';
import { Container, Row, Col, Image,Button } from 'react-bootstrap';
import bg1 from './image/bg1.svg';
import emoji from './image/emoji.svg';

//import MydModalWithGrid2 from './MydModalWithGrid2';





class BodyOne extends Component {
  render() {
    return (
      <div style={{background:"url(" +  bg1 + ") no-repeat center center fixed",height:91+'vh',width:100+'%',}}>
        
        <Container>
  <Row>
    <Col xs={3} md={5}>
      
    </Col>
    <Col xs={8} md={4}><br/><br/><br/><br/><br/><br/>
      <Image src={emoji} style={{marginLeft:26,}} roundedCircle /><br/>
      <Button variant="outline-success"
     
        style={{borderRadius:13,backgroundColor:'orange',boxShadow:'2px white',color:'white',marginLeft:-7,}}>
        Sign Out
      </Button>
      <Button variant="outline-success" style={{borderRadius:13,backgroundColor:'orange',boxShadow:'2px white',color:'white',marginRight:10,}}>Sign In.</Button>
    </Col>
    <Col xs={1} md={6}>
      
    </Col>
  </Row>
</Container>
      
         
      

      </div>
    );
  }
}

export default BodyOne;


