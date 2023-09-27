import React, { useEffect, useState } from 'react'
import cards from '@/Data/CardData'
import Image from 'next/image'
function CarouselCards() {

  const [data, setData] = useState([])

  useEffect(() => {
    setData(cards)
  }, [])

  return (
    <>
      <div className='cards-container'>
        <div className='cards-text'>
          <h3 className='One-Stop'>One Stop Solution</h3>
          <h2 className='Our'>Our Top-Notch App Development Services</h2>
          <h1 className='text-border'></h1>
          <div className='text-border'>
          </div>
        </div>

        <div className='carousel-container'>
          {
            data.map((item, index) => {
              return (
                <div className='carousel-card-container' key={index}>
                  <div className='carousel-card'>
                    <div className='front-card'>
                      <span className='front-card-items'>
                        <div>
                          <h3 className='front-card-heading'>{item.heading} </h3>
                        </div>
                        <div >
                          <p className='front-card-p'> {item.paragraph}</p>
                        </div>
                      </span>
                      <div className='carousel-card-image'>
                        <Image src={item.imgUrl} width={118} height={167} alt='card-image' />
                      </div>
                    </div>

                    <div className='back-card'>
                      <div className='back-card-items'>
                        <Image src={item.imgUrl} width={80} height={100} alt='card-image' />
                        <div className='front-card-p-con'>
                          <p className='back-card-p'>{item.paragraph}</p>
                        </div>
                      </div>
                      <div >
                        <button className='lern-more'>
                          LEARN MORE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>


      </div>
    </>
  )
}

export default CarouselCards