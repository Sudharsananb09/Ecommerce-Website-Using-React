import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './Services.scss'
import serviceData from '../../assets/data/serviceData'

const Services = () => {
  return (
    <div>
        <Container>
            <Row>
                {serviceData.map( (item, index) =>              
                    <Col lg='3' md='4' key={index}>
                        <div className='services'>
                            <span className='services-logo'>
                                <i class={item.icon}></i>
                            </span>
                            <div className='services-content'>
                                <h4 className='services-title'>{item.title}</h4>
                                <p className='services-description'>
                                    {item.subtitle}
                                </p>
                            </div>                    
                        </div>
                    </Col>
                )}
            </Row>
        </Container>
    </div>
  )
}

export default Services