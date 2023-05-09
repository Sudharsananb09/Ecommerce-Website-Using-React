import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import hero_icon from '../assets/images/hero-img.png'
import { NavLink } from 'react-router-dom'
import Services from '../components/services/Services'

// Imports for Styling
import '../styles/Home.scss'
import { motion } from 'framer-motion'

const Home = () => {
  const year = new Date().getFullYear();
  return (
    <div className='home'>
      <section className='highlight'>
        <Container>
          <Row className='py-5'>
            <Col lg='6' md='6'>
              <div className='best_seller'>
                <p>
                  # Best selling product in {year}
                </p>
                <h2 className='best_seller-title'>Experience Ultimate Comfort in our Modern Sofas</h2>
                <p>
                  Sink into the plush cushions of this comfortable sofa and 
                  feel your worries melt away. Designed for ultimate relaxation,
                  this cosy sofa is perfect for lazy sunday afternoons.
                </p>
                <motion.button whileTap={{scale: 1.25}}>
                  <NavLink to= '/shop' className= 'shop-link'>SHOP NOW</NavLink>
                </motion.button>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className='best_seller-img'>
                <img src={hero_icon}/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
    </div>
  )
}

export default Home