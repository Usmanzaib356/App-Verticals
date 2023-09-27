import React, { useEffect, useState } from 'react'
import { data } from '../Data/Process'
function Industries() {


    const [selectedImage, setSelectedImage] = useState("https://www.appverticals.com/_next/image?url=%2Fnext%2Fhome%2Findustries%2Fenqueue.webp&w=640&q=75")


    const handleChangeImage = (imgUrl) => {
        setSelectedImage(imgUrl)
    }

    return (
        <>
            <div className='industry-sec'>
                <div className='cards-text'>
                    <h3 className=' Development-Process' >Industries We Serve</h3>
                    <h2 className=' Our-Proficient'>Custom Industry Development Service</h2>
                    <h1 className='text-border'></h1>
                    <div className='text-border'>
                    </div>
                </div>

                <div className='industry-content'>
                    <div className='industry-img-con'>
                        <img className='industry-img' src={selectedImage} alt="" />
                    </div>
                    <div className='industry-cards-container'>
                        {
                            data.map((item) => {
                                return (
                                    <div className='industry-card' onClick={() => handleChangeImage(item.heroImg)}>
                                        <div className='industry-card-img-new' >
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div className='industry-card-text'>
                                            <h6 className='we-build'>{item.name}</h6>
                                            <p className='industry-p'>{item.des}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Industries