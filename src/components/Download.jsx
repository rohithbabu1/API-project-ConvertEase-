import React from 'react'
import { Col, Row } from 'react-bootstrap'
import '../components/download.css'

function Download() {
  return (
    <div className='download_main'>
        <Row>
            <Col xs={12} sm={12} md={6 } lg={6} xl={6} xxl={6} className='d-flex justify-content-center'>
                <div>
                    <img src="Download.gif" className='downloadimgae' alt="Download_img" />
                </div>
            </Col>
            <Col xs={12} sm={12} md={6 } lg={6} xl={6} xxl={6}  >
                <h3>Download converter ease app</h3>
                <p>
                    Check live rates, send money  securely , set    
                    rate alerts, receive notification and more...
                </p>
                <div className='my-3'>
                    <img src="Qr-01.svg" className='qr me-4' alt="qrcode" />
                    <span>Over 1 million downloads worldwide    </span>
                </div>
                <div className='d-flex mt-4'> 
                    <div className='social-btns d-flex justify-content-evenly align-items-center p-1 me-3'>
                        <div> <i className="bi bi-apple"></i></div>
                        <div> 
                            <span>Available on the  </span><br/>
                            <span className="big-txt">App Store</span>
                        </div>
                    </div>
                    <div  className='social-btns d-flex justify-content-center align-items-center p-1'>
                        <div><i class="bi bi-google-play"></i></div>
                        <div><span>Get it on  </span><br/>
                        <span className="big-txt">Google Play</span></div>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default Download