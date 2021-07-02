import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
          <video src='/videos/video-1.mp4' autoPlay loop muted />
          <h1>NDJEHU I SIGURT ME NE!</h1>
          <p>Cfare jeni duke pritur?</p>
          <div className='hero-btns'>
            <Button 
               className='btns' 
               buttonStyle='btn--outline'
               buttonSize='btn--large'
            >
                FILLONI
            </Button> 
            
          </div>
        </div>
    );
}

export default HeroSection