import React from 'react'
import { Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css'
function Toolmap({details}) {
  return (
    <Col xs={12} sm={12} md={6} lg={3} xl={3} xxl={3} className=' mb-3'>
    <Card className='text-center'>
      <Card.Img variant="top" src={details.pictuer} className='img-fluid ico pt-3'/>
      <Card.Body>
        <Card.Title>{details.heading}</Card.Title>
        <Card.Text>
            {details.detail}
        </Card.Text>
        <Button variant="primary">Show More</Button>
      </Card.Body>
    </Card>
    </Col>
    
  )
}

export default Toolmap