import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function CaseStudy() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <section className='caseStudie-container'>
                <div className='usa-text-card'>
                    <div className='cards-text'>
                        <h3 className='One-Stop'>Our Case Studies</h3>
                        <h2 className='Our'>Some Of The Exceptional Projects</h2>
                        <h1 className='text-border'></h1>
                        <div className='text-border'>
                        </div>
                        <div className='usa-card-bottom-sec'>
                            <p className='With-people-p'>We Thoroughly Enjoy Bringing Our Strategy, Expertise, And Execution To Action</p>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='carousel-image-container'>
                    <img src='https://www.appverticals.com/next/components/case-study-slider/webp/bitbox-bg.webp' className='carousel-image' alt="" />

                    <div className='carousel-text-con'>
                        <div className='carousel-text-con-child'>
                            <div className='carousel-text-card'>
                                <div>
                                    <img className='bitox-img' src="https://www.appverticals.com/_next/image?url=%2Fnext%2Fcomponents%2Fcase-study-slider%2Fbitbox-logo.png&w=256&q=75" alt="" />
                                </div>
                                <div>
                                    <p className='Bitbox'>
                                        Bitbox is a unique and feature-rich platform to buy and sell cryptocurrencies. Using this application, users are able to initiate transactions anywhere in US. Think of Bitbox like your very own physical cryptocurrency ATM.
                                    </p>
                                </div>
                                <div className='carousel-text-box'>
                                    <img src="https://www.appverticals.com/_next/image?url=%2Fnext%2Fcomponents%2Fcase-study-slider%2Fapple.png&w=256&q=75" alt="" />
                                    <img src="https://www.appverticals.com/_next/image?url=%2Fnext%2Fcomponents%2Fcase-study-slider%2Fgoogle.png&w=256&q=75" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>



            </section>
        </>
    )
}

export default CaseStudy