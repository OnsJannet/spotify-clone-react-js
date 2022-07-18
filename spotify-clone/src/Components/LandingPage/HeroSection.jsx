import React from 'react'

const HeroSection = () => {
  return (
    <div className='HeroSection-Container'>
        <div className='HeroSection-Main-Container'>
            <h1 className='Hero-Header first-header'>Listening is </h1>
            <h1 className='Hero-Header second-header'>everything </h1>
        </div>
        <div className='HeroSection-Secondairy-Container'>
            <h6 className='HeroSection-Secondairy-Text'>
            Millions of songs and podcasts. No credit card needed.
            </h6>
            <button className='HeroSection-Secondairy-Button'>
                get spoity free
            </button>
        </div>

    </div>
  )
}

export default HeroSection