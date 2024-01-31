import React from 'react'
import { Col, Row } from 'react-bootstrap'
import '../App.css'
function Banner() {
  return (
    <Row className='align-items-center'>
        <Col xs={12} sm={12} md={6 } lg={6} xl={6} xxl={6}>
            <h1 className='my-2 '>Your Fast and Reliable Currency Exchange Solution!</h1>
            <p className=' mb-3'>Empower your financial journey with real-time rate alerts, historical insights, and a vibrant currency community at Convertease.Your Ultimate Currency Companion!</p>
            <i class="bi bi-chevron-double-down check "></i> 
        </Col>
        <Col xs={12} sm={12} md={2} lg={2} xl={2} xxl={2}></Col>
        <Col xs={12} sm={12} md={4 } lg={4} xl={4} xxl={4}>
        <div className='d-flex justify-content-center'><img src="finance-leaders-animate.svg" className='banner_img img-fluid' alt="" /></div>
        
            {/* <a href="https://storyset.com/money">Money illustrations by Storyset</a> */}
        </Col>
  
    </Row>
  )
}

export default Banner