import React from 'react';
import Header from '../Header/Header';
import './Hero.css'
import BmiCalculator from '../BmiCalculater/BmiCalculater';


const Hero = () => {
  return (
    
    <div className="hero">
      <div className="left-h">
     
      <Header/>
     
        {/*the best ad*/}
        <div className="the-best-ad">
          <div></div>
          <span>JOIN US AND TRANFORM YOUR LIFE</span>
        </div>

        {/*Hero Heading*/}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Unlock </span>
            <span>Your</span>
          </div>
          <div>
            <span>Full Potential</span>
          </div>
          <div>
            <span>
              Elevate your fitness journey with our cutting-edge facilities and
              expert guidance, and discover a stronger, healthier you at
              GYMNASTICS & GLIMMER.
            </span>
          </div>
        </div>

        {/*figures*/}
        <div className="figures">
          <div>
            <span>+10</span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>+100</span>
            <span>Members Joined</span>
          </div>
          <div>
            <span>+10</span>
            <span>Fitness Programs</span>
          </div>
        </div>

        {/*Hero buttons*/}
        <div className="hero-buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
      </div>
  
      <div className="right-h">
      <div className='hero-button'>
          <buttons>Join Us</buttons>
          </div>
          <BmiCalculator/>

      </div>
  
    </div>
    
  );
};

export default Hero;
