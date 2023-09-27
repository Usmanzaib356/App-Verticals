'use client'
import React from 'react'
import Image from 'next/image'
import video from '../Images/video.mp4'

function Hero() {
  return (
    <section >
      <div className='hero-container'>
        <video autoPlay loop muted className='hero-video-container'>
          <source src={video} type="video/mp4" className='hero-video' />
        </video>
        <div className='hero-text-container'>
          <div className='hero-text-card'>
            <h3 className='Perfect-Blend'>Perfect Blend of Technology & Creativity!</h3>
            <h2 className='App-Development-text'>Top-Notch App Development Company</h2>

            <div className='hero-btns'>
              <button className='HAVE-AN-btn'>
                HAVE AN IDEA, LEST TALK
              </button>
              <button className='get-a-qoute'>
                GET A QOUTE
              </button>
            </div>
          </div>

        </div>
        <div className='hero-images-container'>
          <div className='hero-images-card' >
            <div >
              <img className='hero-img' src='https://www.appverticals.com/_next/image?url=%2Fnext%2Fhome%2Fbanner%2F01.webp&w=256&q=75' alt='image' />
            </div>
            <div >
              <img className='hero-img' src='https://www.appverticals.com/_next/image?url=%2Fnext%2Fhome%2Fbanner%2F02.webp&w=256&q=75' alt='image' />
            </div>
            <div >
              <img className='hero-img' src='https://www.appverticals.com/_next/image?url=%2Fnext%2Fhome%2Fbanner%2F03.webp&w=256&q=75' alt='image' />
            </div>
            <div >
              <img className='hero-img' src='https://www.appverticals.com/_next/image?url=%2Fnext%2Fhome%2Fbanner%2F04.webp&w=256&q=75' alt='image' />
            </div>
            <div >
              <img className='hero-img' src='https://www.appverticals.com/_next/image?url=%2Fnext%2Fhome%2Fbanner%2F05.webp&w=256&q=75' alt='image' />
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Hero